import { getCurrentName, getMinutesSinceMessage, messagesToConversations } from './user';
import { Conversation, Message } from './api';
import { v4 as uuidv4 } from 'uuid';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test('Returns a valid name', () => {
  expect(getCurrentName()).not.toBeNull();
});

const msToAdvance = 10;
const advanceAndGetTime = (): number => {
  jest.advanceTimersByTime(msToAdvance);
  return Date.now();
};

test('Returns a correct conversation list from a single message', () => {
  const messages: Message[] = [
    {
      name: 'John',
      text: 'Hello',
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    }
  ];

  const conversations: Conversation[] = [
    {
      name: 'John',
      messages,
      lastMessage: messages[0],
      minutesSinceLast: getMinutesSinceMessage(messages[0])
    }
  ];

  expect(messagesToConversations(messages)).toStrictEqual(conversations);
});

test('Returns a correct conversation list from 3 messages', () => {
  const messages: Message[] = [
    {
      name: 'John',
      text: 'Hello',
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    },
    {
      name: 'Tim',
      text: 'Hi',
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    },
    {
      name: 'Tim',
      text: 'How are you?',
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    }
  ];

  const conversations: Conversation[] = [
    {
      name: 'John',
      messages: [messages[0]],
      lastMessage: messages[0],
      minutesSinceLast: getMinutesSinceMessage(messages[0])
    },
    {
      name: 'Tim',
      messages: messages.slice(1, 3),
      lastMessage: messages[2],
      minutesSinceLast: getMinutesSinceMessage(messages[2])
    }
  ];

  expect(messagesToConversations(messages)).toStrictEqual(conversations);
});

test('Returns a correct conversation list from 7 messages', () => {
  const messages: Message[] = [
    {
      name: 'John',
      text: 'Hello',
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    },
    {
      name: 'Tim',
      text: 'Hi',
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    },
    {
      name: 'Tim',
      text: 'How are you?',
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    },
    {
      name: 'Tim',
      text: "What's up",
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    },
    {
      name: 'Nolan',
      text: 'Hey',
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    },
    {
      name: 'Nolan',
      text: 'Good luck!',
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    },
    {
      name: 'Mary',
      text: 'Hi',
      id: uuidv4(),
      dateAdded: advanceAndGetTime(),
      dateEdited: advanceAndGetTime()
    }
  ];

  const conversations: Conversation[] = [
    {
      name: 'John',
      messages: [messages[0]],
      lastMessage: messages[0],
      minutesSinceLast: getMinutesSinceMessage(messages[0])
    },
    {
      name: 'Tim',
      messages: messages.slice(1, 4),
      lastMessage: messages[3],
      minutesSinceLast: getMinutesSinceMessage(messages[3])
    },
    {
      name: 'Nolan',
      messages: messages.slice(4, 6),
      lastMessage: messages[5],
      minutesSinceLast: getMinutesSinceMessage(messages[5])
    },
    {
      name: 'Mary',
      messages: [messages[6]],
      lastMessage: messages[6],
      minutesSinceLast: getMinutesSinceMessage(messages[6])
    }
  ];

  expect(messagesToConversations(messages)).toStrictEqual(conversations);
});
