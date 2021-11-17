import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/books/books.js';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.reducers.books);

  return (
    <ul>
      {books.map((book) => (<li key={book.id}>
          <span>Book: {book.title}</span>
          <span> Category: {book.author}</span>
          <button onClick={() => dispatch(remove(book.id))} type="button">Remove</button>
        </li>))}
    </ul>
  );
}

export default BookList;