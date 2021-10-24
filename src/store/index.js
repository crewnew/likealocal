import { createStore, combineReducers } from 'redux';
import {searchReducer} from './search/reducer';

const reducer = combineReducers({
  searchReducer: searchReducer,
});

const store = createStore(reducer);
export default store;