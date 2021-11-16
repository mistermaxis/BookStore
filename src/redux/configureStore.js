import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import BooksReducer from './books/books.js';

const reducers = combineReducers({
  reducers: BooksReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;