import { apiGetBooks, apiAddBook } from '../../api/api.js';
import apiToState from '../../converter/api-to-state.js';

const ADD_BOOK = 'bookstore/src/redux/books/add-book';
const REMOVE_BOOK = 'bookstore/src/redux/books/remove-book';
const SET_BOOKS = 'bookstore/src/redux/books/set-books';

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book.item_id !== action.id) };
    case SET_BOOKS:
      return { ...state, books: action.books };
    default:
      return state;
  }
};

function setBooks(payload) {
  return { type: SET_BOOKS, books: payload };
}

function add(payload) {
  return { type: ADD_BOOK, book: payload };
}

function remove(payload) {
  return { type: REMOVE_BOOK, id: payload };
}

export const fetchBooks = () => async (dispatch) => {
  const data = await apiGetBooks();
  const booksData = apiToState(data);
  dispatch(setBooks(booksData));
};

export const addBook = (book) => async (dispatch) => {
  apiAddBook(book);
  dispatch(add(book));
};

export const removeBook = (id) => async (dispatch) => {
  dispatch(remove(id));
};
