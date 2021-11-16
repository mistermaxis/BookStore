import BookList from '../components/booklist.js';
import AddBook from '../components/addbook.js';

function Books() {
  return (
    <div>
      <h1>Books</h1>
      <BookList />
      <AddBook></AddBook>
    </div>
  );
}

export default Books;
