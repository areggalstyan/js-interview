import axios from 'axios';
import { Conversation, getCurrentName, toConversations } from './conversation';
import { v4 as uuidv4 } from 'uuid';

export const getConversations: () => Promise<Conversation[]> = async () => {
  try {
    return toConversations((await axios.get(`${process.env.REACT_APP_API_URL}/comments`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })).data);
  } catch {
    alert('An error occurred while trying to load the conversations');
    return [];
  }
};

export const addMessage: (text: string) => Promise<void> = async text => {
  try {
    return await axios.post(`${process.env.REACT_APP_API_URL}/comments`, {
      name: getCurrentName(),
      text,
      id: uuidv4(),
      dateAdded: Date.now()
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  } catch {
    alert('An error occurred while trying to send the message');
  }
};

export const removeMessage: (id: string) => Promise<void> = async id => {
  try {
    return await axios.delete(`${process.env.REACT_APP_API_URL}/comment/${id}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  } catch {
    alert('An error occurred while trying to delete the message');
  }
};

export const editMessage: (id: string, name: string, text: string) => Promise<void> = async (id, name, text) => {
  try {
    return await axios.put(`${process.env.REACT_APP_API_URL}/comment/${id}`, { id, name, text }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  } catch {
    alert('An error occurred while trying to edit the message')
  }
};
