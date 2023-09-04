import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
const { combineReducers } = require('redux');

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
