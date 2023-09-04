import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
const { combineReducers } = require('redux');

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
