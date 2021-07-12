import { combineReducers } from "redux";
import searchReducer from './searchReducer';
import details from './details';

const rootReducer = combineReducers({
  searchReducer,
  details,
})

export default rootReducer;
