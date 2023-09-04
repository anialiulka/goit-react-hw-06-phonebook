import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    filteredContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { filteredContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
