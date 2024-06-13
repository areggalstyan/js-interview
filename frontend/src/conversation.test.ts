import { Conversation, Message, toConversations } from './conversation';
import { v4 as uuidv4 } from 'uuid';

test('Returns a correct conversation list from empty message list', () => {
  expect(toConversations([])).toStrictEqual([]);
});

test('Returns a correct conversation list from a single message', () => {
  const messages: Message[] = [{
    name: 'John',
    text: 'Hello',
    id: uuidv4(),
    dateAdded: Date.now(),
    dateEdited: Date.now()
  }];

  const conversation: Conversation[] = [{
    name: 'John',
    messages
  }]

  expect(toConversations(messages)).toStrictEqual(conversation);
});

test('Returns a correct conversation list from 3 messages', () => {
  const messages: Message[] = [
    {
      name: 'John',
      text: 'Hello',
      id: uuidv4(),
      dateAdded: Date.now(),
      dateEdited: Date.now()
    },
    {
      name: 'Tim',
      text: 'Hi',
      id: uuidv4(),
      dateAdded: Date.now(),
      dateEdited: Date.now()
    },
    {
      name: 'Tim',
      text: 'How are you?',
      id: uuidv4(),
      dateAdded: Date.now(),
      dateEdited: Date.now()
    }
  ];

  const conversation: Conversation[] = [
    {
      name: 'John',
      messages: [messages[0]]
    },
    {
      name: 'Tim',
      messages: messages.slice(1, 3)
    }
  ]

  expect(toConversations(messages)).toStrictEqual(conversation);
});

test('Returns a correct conversation list from 7 messages', () => {
  const messages: Message[] = [
    {
      name: 'John',
      text: 'Hello',
      id: uuidv4(),
      dateAdded: Date.now(),
      dateEdited: Date.now()
    },
    {
      name: 'Tim',
      text: 'Hi',
      id: uuidv4(),
      dateAdded: Date.now(),
      dateEdited: Date.now()
    },
    {
      name: 'Tim',
      text: 'How are you?',
      id: uuidv4(),
      dateAdded: Date.now(),
      dateEdited: Date.now()
    },
    {
      name: 'Tim',
      text: 'What\'s up',
      id: uuidv4(),
      dateAdded: Date.now(),
      dateEdited: Date.now()
    },
    {
      name: 'Nolan',
      text: 'Hey',
      id: uuidv4(),
      dateAdded: Date.now(),
      dateEdited: Date.now()
    },
    {
      name: 'Nolan',
      text: 'Good luck!',
      id: uuidv4(),
      dateAdded: Date.now(),
      dateEdited: Date.now()
    },
    {
      name: 'Mary',
      text: 'Hi',
      id: uuidv4(),
      dateAdded: Date.now(),
      dateEdited: Date.now()
    }
  ];

  const conversation: Conversation[] = [
    {
      name: 'John',
      messages: [messages[0]]
    },
    {
      name: 'Tim',
      messages: messages.slice(1, 4)
    },
    {
      name: 'Nolan',
      messages: messages.slice(4, 6)
    },
    {
      name: 'Mary',
      messages: [messages[6]]
    }
  ];

  expect(toConversations(messages)).toStrictEqual(conversation);
});
