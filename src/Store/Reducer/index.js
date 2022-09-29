import { combineReducers } from 'redux';
import globalReducer from './GlobalReducer';
import userReducer from './UserReducer';
import hotelReducer from './HotelReducer';
import productReducer from './ProductReducer'

export default combineReducers({
  globalReducer,
  userReducer,
  hotelReducer,
  productReducer
});
