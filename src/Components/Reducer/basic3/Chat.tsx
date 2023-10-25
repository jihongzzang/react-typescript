// import { useState } from 'react';

import { Dispatch } from 'react';
import { ContactItem } from './types';

export function Chat({
  contact,
  message,
  dispatch,
}: {
  contact: ContactItem;
  message: string;
  dispatch: Dispatch<{
    type: 'changed_selection' | 'edited_message' | 'sent_message';
    contactId?: number | undefined;
    message?: string | undefined;
  }>;
}) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({ type: 'edited_message', message: e.target.value });
        }}
      />
      <br />
      <button
        type="button"
        disabled={!message}
        onClick={() => {
          alert(`Sending "${message}" to ${contact.email}`);
          dispatch({
            type: 'sent_message',
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
