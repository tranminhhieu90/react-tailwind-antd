import counterReducer from 'app/slide/counterSlide';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
  counter: counterReducer
})