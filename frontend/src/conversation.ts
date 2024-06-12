import { adjectives, names, uniqueNamesGenerator } from 'unique-names-generator';

export const getCurrentName: () => string = () => {
  const storedName = localStorage.getItem('name');
  if (storedName !== null) {
    return storedName;
  }
  const name = uniqueNamesGenerator({
    dictionaries: [adjectives, names]
  });
  localStorage.setItem('name', name);
  return name;
};

export type Message = {
  name: string,
  text: string,
  id: string,
  dateAdded: number,
  dateEdited: number
};

export type Conversation = {
  name: string,
  messages: Message[]
}

export const toConversations: (messages: Message[]) => Conversation[] = messages => {
  const currentName = getCurrentName();
  const messagesByNames: { [name: string]: Message[] } = {};

  messages.filter(({ name }) => name !== currentName).forEach(message => {
    const name = message.name;
    messagesByNames[name] = [...(messagesByNames[name] || []), message];
  });

  return Object.keys(messagesByNames).map(name => {
    return {
      name,
      messages: [
        ...messagesByNames[name],
        ...messages.filter(({ name }) => name === getCurrentName())
      ].sort((a, b) => a.dateAdded - b.dateAdded)
    };
  });
};
