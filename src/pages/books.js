import BookList from '../components/booklist.js';
import AddBook from '../components/addbook.js';

function Books() {
  return (
    <div>
      <BookList />
      <div className="h-separator"></div>
      <AddBook />
    </div>
  );
}

export default Books;
