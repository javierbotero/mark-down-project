import { configureStore, createSlice } from '@reduxjs/toolkit';
import { initialStateText } from './utils/utils';

const textReducer = createSlice({
  name: 'text',
  initialState: initialStateText,
  reducers: {
    addText(state, action) { return action.payload }
  }
});
const store = configureStore({
  reducer: {
    text: textReducer.reducer
  }
});

export default store;
export const { addText } = textReducer.actions;
