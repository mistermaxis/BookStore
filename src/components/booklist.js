import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/books.js';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.reducers.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleClickRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <ul>
      {books.map((book) => (<li key={book.item_id}>
          <span>Book: {book.title}</span>
          <span> Category: {book.category}</span>
          <button onClick={() => handleClickRemove(book.item_id)} type="button">Remove</button>
        </li>))}
    </ul>
  );
}

export default BookList;