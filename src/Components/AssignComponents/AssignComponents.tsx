import { useState } from 'react';
import { Dialog } from './Modal';

function AssignComponents() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
        모달 {isOpen ? `닫기` : `열기`}
      </button>
      <Dialog isOpen={isOpen}>
        <Dialog.Title>title</Dialog.Title>

        <Dialog.LabelButton onClick={() => alert('라벨1')}>
          라벨
        </Dialog.LabelButton>

        <Dialog.LabelButton onClick={() => alert('라벨1')}>
          라벨
        </Dialog.LabelButton>

        <Dialog.LabelButton onClick={() => alert('라벨1')}>
          라벨
        </Dialog.LabelButton>

        <Dialog.LabelButton onClick={() => alert('라벨1')}>
          라벨
        </Dialog.LabelButton>

        <Dialog.ActionButton onClick={() => alert('확인')}>
          확인
        </Dialog.ActionButton>

        <Dialog.ActionButton onClick={() => setIsOpen(false)}>
          닫기
        </Dialog.ActionButton>
      </Dialog>
    </>
  );
}

export default AssignComponents;
