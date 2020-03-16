import { combineReducers } from 'redux';

import characters from './characters';
import details from './details';
import filter from './filter';

export default combineReducers({ characters, details, filter })