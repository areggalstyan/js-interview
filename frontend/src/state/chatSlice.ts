import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentName } from '../user';
import { Conversation } from '../api/models';

export type Status = 'idle' | 'processing' | 'success' | 'failure';

export type Chat = {
  conversations: Conversation[];
  selectedConversation?: Conversation;
  messageCount: number;
  visibleConversations: Conversation[];
  searchText: string;
  status: Status;
};

const initialState: Chat = {
  conversations: [],
  messageCount: 0,
  visibleConversations: [],
  searchText: '',
  status: 'idle'
};

const calculateMessageCount = (conversations: Conversation[]): number =>
  conversations.flatMap(({ messages }) => messages).filter(({ name }) => name !== getCurrentName())
    .length;

const findConversationByName = (
  conversations: Conversation[],
  name: string
): Conversation | undefined => conversations.find(conversation => conversation.name === name);

const getUpdatedSelectedConversation = (
  conversations: Conversation[],
  selectedConversation?: Conversation
): Conversation | undefined =>
  selectedConversation && findConversationByName(conversations, selectedConversation.name);

const performSearch = (conversations: Conversation[], searchText: string): Conversation[] =>
  conversations.filter(({ messages }) => messages.some(({ text }) => text.includes(searchText)));

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    receiveUpdate: (state, { payload }: PayloadAction<Conversation[]>) => {
      return {
        ...state,
        conversations: payload,
        selectedConversation: getUpdatedSelectedConversation(payload, state.selectedConversation),
        messageCount: calculateMessageCount(payload),
        visibleConversations: performSearch(payload, state.searchText)
      };
    },
    changeStatus: (state, { payload }: PayloadAction<Status>) => {
      return {
        ...state,
        status: payload
      };
    },
    selectConversation: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        selectedConversation: findConversationByName(state.conversations, payload)
      };
    },
    changeSearchText: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        searchText: payload,
        visibleConversations: performSearch(state.conversations, payload)
      };
    }
  }
});

export const { receiveUpdate, changeStatus, selectConversation, changeSearchText } =
  chatSlice.actions;
export default chatSlice.reducer;
