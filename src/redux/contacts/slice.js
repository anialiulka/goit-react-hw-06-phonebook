import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactInfo: (state, action) => {
      const newContact = {
        ...action.payload,
        id: nanoid(),
      };
      return { ...state, contacts: [...state.contacts, newContact] };
    },

    deleteContactInfo: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    }),
  },
});

export const { addContactInfo, deleteContactInfo } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
