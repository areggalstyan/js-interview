export type Message = {
  dateAdded: number;
  dateEdited: number;
} & MessageEdit;

export type MessageEdit = {
  id: string;
  name: string;
  text: string;
};

export type Conversation = {
  name: string;
  messages: Message[];
  lastMessage: Message;
  minutesSinceLast: number;
};
