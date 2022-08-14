import { combineReducers } from 'redux';
import globalReducer from './GlobalReducer';
import userReducer from './UserReducer';

export default combineReducers({
  globalReducer,
  userReducer,
});
