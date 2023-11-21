import { ContactList } from './ContactList';
import { Chat } from './Chat';
import { initialState, messengerReducer } from './messengerReducer';
import { ContactItem } from './types';
import { Stack, styled } from '@mui/material';
import { useCustomReducer } from './customReducer';

const contacts: ContactItem[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const Wrraper = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
}));

function Messenger() {
  const [state, dispatch] = useCustomReducer(messengerReducer, initialState);

  const message = state.messages[state.selectedId];

  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <Wrraper>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />

      {contact && (
        <Chat
          key={contact.id}
          message={message}
          contact={contact}
          dispatch={dispatch}
        />
      )}
    </Wrraper>
  );
}

export default Messenger;
