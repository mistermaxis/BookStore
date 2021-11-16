import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/books/books.js';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.reducers.books);

  return (
    <ul>
      {books.map((book) => (<li key={book.id}>
          <span>{book.title}</span>
          <span> by </span>
          <span>"{book.author}"</span>
          <p>{book.id}</p>
          <button onClick={() => dispatch(remove(book.id))} type="button">Remove</button>
        </li>))}
    </ul>
  );
}

export default BookList;