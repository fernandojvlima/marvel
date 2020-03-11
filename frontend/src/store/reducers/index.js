import { combineReducers } from 'redux';
import ip from './ip'
import ua from './ua'
import characters from './characters'

export default combineReducers({ ip, ua, characters })