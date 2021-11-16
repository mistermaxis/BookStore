import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/books/books.js';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.reducers.books);

  return (
    <ul>
      {books.map((book, index) => (<li key={index}>
          <span>{book.title}</span>
          <span> by </span>
          <span>"{book.author}"</span>
        <button onClick={() => dispatch(remove(index))} type="button">Remove</button>
        </li>))}
    </ul>
  );
}

export default BookList;