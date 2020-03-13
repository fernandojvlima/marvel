import { combineReducers } from 'redux';

import characters from './characters';
import details from './details';

export default combineReducers({ characters, details })