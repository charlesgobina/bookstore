import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [empty, setEmpty] = useState(false);
  const resetTitle = () => {
    setTitle('');
  };

  const resetAuthor = () => {
    setAuthor('');
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') {
      setEmpty(true);
    } else {
      setEmpty(false);
      const newBook = {
        id: v4(),
        title,
        author,
      };
      dispatch(addBook(newBook));
      resetAuthor();
      resetTitle();
    }
  };

  return (
    <>
      <h2>Add a book</h2>
      <form>
        <input
          required
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
        />
        { empty ? <small>Please fill in all fields</small>
          : '' }
        <button
          type="submit"
          onClick={(e) => submitBookToStore(e)}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddBook;
