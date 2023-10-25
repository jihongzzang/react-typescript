import { SendMessageItem } from './types';

export const initialState: SendMessageItem = {
  selectedId: 0,
  messages: {
    0: 'Hello, Taylor',
    1: 'Hello, Alice',
    2: 'Hello, Bob',
  },
};

export function messengerReducer(
  state: SendMessageItem,
  action: {
    type: 'changed_selection' | 'edited_message' | 'sent_message';
    contactId?: number;
    message?: string;
  },
) {
  switch (action.type) {
    case 'changed_selection': {
      if (typeof action?.contactId === 'number') {
        return {
          ...state,
          selectedId: action.contactId,
        };
      } else {
        throw Error('you need contactID');
      }
    }

    case 'edited_message': {
      if (typeof action.message === 'string') {
        return {
          ...state,
          messages: {
            ...state.messages,
            [state.selectedId]: action.message,
          },
        };
      } else {
        throw Error('you need message');
      }
    }

    case 'sent_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: '',
        },
      };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
