import { createAction } from '@reduxjs/toolkit';

export const addContactInfo = createAction('addcontact');
export const deleteContactInfo = createAction('removecontact');
export const filteredContacts = createAction('filter');
