import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import characters from './characters';
import details from './details';
import filter from './filter';
//import editCharacter from './editCharacter';


export default combineReducers({
  characters,
  details,
  filter,
  form: formReducer,
  //editCharacter,

})