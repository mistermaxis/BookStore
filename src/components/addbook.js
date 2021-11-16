import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books.js';

function AddBook() {
  const dispatch = useDispatch();

  const addBook = (event) => {
    event.preventDefault();
    const target = event.currentTarget;
    const newBook = {
      title: target.children[0].value,
      author: target.children[1].value,
    };
    dispatch(add(newBook));
  };

  return (
    <form onSubmit={addBook}>
      <input type="text" required placeholder="Book Title"></input>
      <input type="text" required placeholder="Book Author"></input>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;