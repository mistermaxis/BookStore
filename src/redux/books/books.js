const APP_ID = 'w7Ib1BZ0vJLTJIirUdXL';
const API_ADDRESS = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;
const ADD_BOOK = 'bookstore/src/redux/books/add-book';
const REMOVE_BOOK = 'bookstore/src/redux/books/remove-book';
// const SET_BOOKS = 'bookstore/src/redux/books/set-books';

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.id) };
    // case: SET_BOOKS:
    //   return { ...state, books: action.books }
    default:
      return state;
  }
};

export const fetchBooks = () => async () => {
  const response = await fetch(API_ADDRESS)
    .then((response) => response.json());
  // const apiBooks = await response.json();
  console.log(response);
};

export function add(payload) {
  return { type: ADD_BOOK, book: payload };
}

export function remove(payload) {
  return { type: REMOVE_BOOK, id: payload };
}