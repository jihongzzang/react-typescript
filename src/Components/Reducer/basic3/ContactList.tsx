import { Dispatch } from 'react';
import { ContactItem } from './types';

export function ContactList({
  contacts,
  selectedId,
  dispatch,
}: {
  contacts: ContactItem[];
  selectedId: number;
  dispatch: Dispatch<{
    type: 'changed_selection' | 'edited_message' | 'sent_message';
    contactId?: number | undefined;
    message?: string | undefined;
  }>;
}) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                dispatch({ type: 'changed_selection', contactId: contact.id });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
