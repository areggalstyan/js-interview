import axios, { AxiosRequestConfig } from 'axios';
import Swal from 'sweetalert2';
import i18n from './i18n/i18n';
import { getCurrentName, messagesToConversations } from './user';
import { v4 as uuidv4 } from 'uuid';

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

const url = process.env.REACT_APP_API_URL!;
const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

export const fetchConversations = async (): Promise<Conversation[]> => {
  try {
    return messagesToConversations((await axios.get(`${url}/comments`, config)).data);
  } catch {
    Swal.fire({
      title: i18n.t('networkError'),
      text: i18n.t('fetchConversationsError'),
      icon: 'error'
    });
    return [];
  }
};

export const addMessage = async (text: string): Promise<void> => {
  return await axios.post(
    `${url}/comments`,
    {
      name: getCurrentName(),
      text,
      id: uuidv4(),
      dateAdded: Date.now()
    },
    config
  );
};

export const editMessage = async (data: MessageEdit): Promise<void> => {
  return await axios.put(`${url}/comment/${data.id}`, data, config);
};

export const removeMessage = async (id: string): Promise<void> => {
  return await axios.delete(`${url}/comment/${id}`, config);
};
