import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/books.js';
import './booklist.css';

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
    <ul className="booklist-section">
      {books.map((book) => (<li className="book-container" key={book.item_id}>
          <div className="book-info">
            <div className="book-info-main">
              <span className="category">{book.category}</span>
              <span className="book-title">{book.title}</span>
              <span className="book-author">Suzanne Collins</span>
            </div>
            <div className="book-info-buttons">
              <button className="book-control" type="button">Comments</button>
              <div className="separator"></div>
              <button className="book-control" onClick={() => handleClickRemove(book.item_id)} type="button">Remove</button>
              <div className="separator"></div>
              <button className="book-control" type="button">Edit</button>
            </div>
          </div>
          <div className="right-side-container">
            <div className="completed-section">
              <div className="circle-container">
                <div className="circle"></div>
              </div>
              <div className="completed-container">
                <span className="completed-percentage">55%</span>
                <span className="completed-text">Completed</span>
              </div>
            </div>
            <div className="right-side-separator"></div>
            <div className="progress-section">
              <div className="chapter-container">
                <span className="chapter-header">CURRENT CHAPTER</span>
                <span className="chapter-text">Chapter 4</span>
              </div>
              <button className="update-button">UPDATE PROGRESS</button>
            </div>
          </div>
        </li>))}
    </ul>
  );
}

export default BookList;