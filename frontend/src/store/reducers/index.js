import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import characters from './characters';
import filter from './filter';

export default combineReducers({
  characters,
  filter,
  form: formReducer,
})