import { ReactNode, MouseEvent, Children, isValidElement } from 'react';
import { createPortal } from 'react-dom';

interface DialogTitleProps {
  children?: ReactNode;
}

function DialogTitle({ children }: DialogTitleProps) {
  return <div>{children}</div>;
}

interface DialogLabelButtonProps {
  children?: ReactNode;
  onClick?: (e?: MouseEvent) => void;
}

interface DialogActionButtonProps {
  children?: ReactNode;
  onClick?: (e?: MouseEvent) => void;
}

function DialogLabelButton({ children, onClick }: DialogLabelButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function DialogActionButton({ children, onClick }: DialogActionButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

const DialogTitleType = (<DialogTitle />).type;

const DialogLabelButtonType = (<DialogLabelButton />).type;

const DialogActionButtonType = (<DialogActionButton />).type;

function getDialogTitle(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === DialogTitleType,
  );
}

function getDialogLabelButtons(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === DialogLabelButtonType,
  );
}

function getDialogActionButtons(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === DialogActionButtonType,
  );
}

interface DialogMainProps {
  children?: ReactNode;
  isOpen: boolean;
}

function DialogMain({ children, isOpen }: DialogMainProps) {
  if (!isOpen) return null;

  const dialogTitle = getDialogTitle(children);

  const dialogLabelButtons = getDialogLabelButtons(children);

  const dialogActionButtons = getDialogActionButtons(children);

  return createPortal(
    <div
      style={{
        minWidth: '300px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid green',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {dialogTitle && (
        <div style={{ width: '100%', textAlign: 'center' }}>{dialogTitle}</div>
      )}

      {dialogLabelButtons?.length > 0 && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {dialogLabelButtons}
        </div>
      )}

      {dialogActionButtons?.length > 0 && (
        <div style={{ width: '100%', display: 'flex', gap: '16px' }}>
          {dialogActionButtons}
        </div>
      )}
    </div>,
    document.body,
  );
}

export const Dialog = Object.assign(DialogMain, {
  Title: DialogTitle,
  LabelButton: DialogLabelButton,
  ActionButton: DialogActionButton,
});
