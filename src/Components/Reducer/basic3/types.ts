export type ContactItem = { id: number; name: string; email: string };

export type Messages = {
  [key: number]: string;
};

export type SendMessageItem = {
  selectedId: number;
  messages: Messages;
};
