import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContactInfo: (state, action) => [...state, action.payload],
    deleteContactInfo: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addContactInfo, deleteContactInfo } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
