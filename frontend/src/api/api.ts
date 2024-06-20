import axios, { AxiosResponse, Method } from 'axios';
import Swal from 'sweetalert2';
import i18n from '../i18n/i18n';
import { getCurrentName, messagesToConversations } from '../user';
import { v4 as uuidv4 } from 'uuid';
import { Conversation, MessageEdit } from './models';

const url = process.env.REACT_APP_API_URL!;
const sendRequest = <T = any, R = AxiosResponse<T>, D = any>(
  method: Method,
  route: string,
  data?: D
): Promise<R> => {
  return axios<T, R, D>({
    url: `${url}/${route}`,
    method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  });
};

export const fetchConversations = async (): Promise<Conversation[]> => {
  try {
    const { data } = await sendRequest('get', 'comments');
    return messagesToConversations(data);
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
  const data: MessageEdit = {
    name: getCurrentName(),
    text,
    id: uuidv4()
  };
  return await sendRequest('post', 'comments', data);
};

export const editMessage = async (data: MessageEdit): Promise<void> => {
  return await sendRequest('put', `comment/${data.id}`, data);
};

export const removeMessage = async (id: string): Promise<void> => {
  return await sendRequest('delete', `comment/${id}`);
};
