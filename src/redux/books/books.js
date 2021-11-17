const ADD_BOOK = 'bookstore/src/redux/books/add-book';
const REMOVE_BOOK = 'bookstore/src/redux/books/remove-book';

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.id) };
    default:
      return state;
  }
};

export function add(payload) {
  return { type: ADD_BOOK, book: payload };
}

export function remove(payload) {
  return { type: REMOVE_BOOK, id: payload };
}