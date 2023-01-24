import { combineReducers } from 'redux';
import { userContacts } from './contacts/userContactSlice';
import { filterReducer } from './filters/filtersSlice';

const rootReducer = combineReducers({
  contacts: userContacts,
  filter: filterReducer,
});

export default rootReducer;
