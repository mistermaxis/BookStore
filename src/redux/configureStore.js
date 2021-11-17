import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import BooksReducer from './books/books.js';

const reducers = combineReducers({
  reducers: BooksReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;