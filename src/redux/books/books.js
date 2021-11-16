const ADD_BOOK = 'bookstore/src/redux/books/add-book';
const REMOVE_BOOK = 'bookstore/src/redux/books/remove-book';

const initialState = {
  books: [
    {
      title: 'Pim',
      author: 'Pam',
    },
    {
      title: 'Pum',
      author: 'My Grandma',
    },
    {
      title: 'One League',
      author: 'Norton',
    },
  ],
  categories: [],
};

export default (state = initialState, action, payload) => {
  switch (action) {
    case ADD_BOOK:
      return { ...state, books: state.books.push(payload) };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== payload) };
    default:
      return state;
  }
};

export function add() {
  return { type: ADD_BOOK };
}

export function remove() {
  return { type: REMOVE_BOOK };
}