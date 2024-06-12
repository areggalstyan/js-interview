import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const currentConversationSlice = createSlice({
  name: 'currentConversation',
  initialState: null as string | null,
  reducers: {
    selectConversation: (state, { payload }: PayloadAction<string>) => {
      return payload;
    }
  }
});

export const { selectConversation } = currentConversationSlice.actions;
export default currentConversationSlice.reducer;
