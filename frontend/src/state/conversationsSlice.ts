import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Conversation } from '../conversation';

export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: [] as Conversation[],
  reducers: {
    receiveUpdate: (state, { payload }: PayloadAction<Conversation[]>) => {
      return payload;
    }
  }
});

export const { receiveUpdate } = conversationsSlice.actions;
export default conversationsSlice.reducer;
