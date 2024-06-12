import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setText: (state, { payload }: PayloadAction<string>) => {
      return payload;
    }
  }
});

export const { setText } = searchSlice.actions;
export default searchSlice.reducer;
