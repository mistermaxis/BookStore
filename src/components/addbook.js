import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { add } from '../redux/books/books.js';

function AddBook() {
  const [_title, setTitle] = useState('');
  const [_category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeAuthor = (event) => {
    setCategory(event.currentTarget.value);
  };

  const addBook = (event) => {
    event.preventDefault();
    const newBook = {
      title: _title,
      category: _category,
      item_id: uuid().slice(0, 8),
    };
    dispatch(add(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={addBook}>
      <input onChange={handleChangeTitle} type="text" value={_title} required placeholder="Book Title"></input>
      <input onChange={handleChangeAuthor} type="text" value={_category} required placeholder="Book Category"></input>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;