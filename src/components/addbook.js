import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books.js';
import './addbook.css';

function AddBook() {
  const [_title, setTitle] = useState('');
  const [_category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: _title,
      category: _category,
      item_id: uuid().slice(0, 8),
    };
    dispatch(addBook(newBook));
    setTitle('');
  };

  return (
    <form className="addbook-container" onSubmit={handleSubmit}>
      <h1 className="addbook-header">ADD NEW BOOK</h1>
      <div className="input-section">
        <input onChange={handleChangeTitle} type="text" value={_title} required placeholder="Book Title"></input>
        <input onChange={handleChangeCategory} required placeholder="Category" list="categories"/>
        <datalist id="categories">
          <option>Fantasy</option>
          <option>Fiction</option>
          <option>Drama</option>
          <option>Comedy</option>
          <option>Action</option>
        </datalist>
        <button className="input-button" type="submit">ADD BOOK</button>
      </div>
    </form>
  );
}

export default AddBook;