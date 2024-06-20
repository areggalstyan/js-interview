import { adjectives, names, uniqueNamesGenerator } from 'unique-names-generator';
import { Conversation, Message } from './api/models';
import { lsGetOrCompute } from './localStorage';

let currentName = lsGetOrCompute('name', () =>
  uniqueNamesGenerator({
    dictionaries: [adjectives, names]
  })
);

export const getCurrentName = (): string => currentName;
export const getMinutesSinceMessage = ({ dateAdded }: Message) =>
  new Date(Date.now() - dateAdded).getMinutes();

const compareMessages = (a: Message, b: Message): number => a.dateAdded - b.dateAdded;

export const messagesToConversations = (messages: Message[]): Conversation[] => {
  const messagesByName: { [name: string]: Message[] } = {};
  const names: string[] = [];
  const myMessages: Message[] = [];

  messages.forEach(message => {
    if (message.name === currentName) {
      myMessages.push(message);
      return;
    }
    const { name } = message;
    messagesByName[name] = [message, ...(messagesByName[name] || [])];
    if (!names.includes(name)) {
      names.push(name);
    }
  });

  return names.map(name => {
    const sortedMessages = [...messagesByName[name], ...myMessages].sort(compareMessages);
    const lastMessage = sortedMessages.at(-1)!;
    return {
      name,
      messages: sortedMessages,
      lastMessage,
      minutesSinceLast: getMinutesSinceMessage(lastMessage)
    };
  });
};
