import { combineReducers } from 'redux';
import {data} from "./reducer.js"

export const appReducer = combineReducers({
  data
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;