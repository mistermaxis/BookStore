import { createStore, combineReducers } from 'redux';
import BooksReducer from './books/books.js';

const reducers = combineReducers({
  reducers: BooksReducer,
});

const store = createStore(reducers, {});

export default store;