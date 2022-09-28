import { combineReducers } from 'redux';
import globalReducer from './GlobalReducer';
import userReducer from './UserReducer';
import hotelReducer from './HotelReducer';

export default combineReducers({
  globalReducer,
  userReducer,
  hotelReducer,
});
