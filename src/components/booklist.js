import { useSelector } from 'react-redux';

function BookList() {
  const books = useSelector((state) => state.reducers.books);

  return (
    <ul>
      {books.map((book) => (<li>
          <span>{book.title}</span>
          <span> by </span>
          <span>"{book.author}"</span>
          <button type="button">Remove</button>
        </li>))}
    </ul>
  );
}

export default BookList;