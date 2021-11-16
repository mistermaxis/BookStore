import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { add } from '../redux/books/books.js';

function AddBook() {
  const [_title, setTitle] = useState('');
  const [_author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.currentTarget.value);
  };

  const addBook = (event) => {
    event.preventDefault();
    
    const newBook = {
      title: _title,
      author: _author,
      id: uuid().slice(0, 8),
    };
    
    dispatch(add(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={addBook}>
      <input onChange={handleChangeTitle} type="text" value={_title} required placeholder="Book Title"></input>
      <input onChange={handleChangeAuthor} type="text" value={_author} required placeholder="Book Author"></input>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;