import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { bookAdd } from '../redux/books/thunks';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [empty, setEmpty] = useState(false);
  const resetTitle = () => {
    setTitle('');
  };

  const resetCategory = () => {
    setCategory('');
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === '') {
      setEmpty(true);
    } else {
      setEmpty(false);
      const newBook = {
        id: v4(),
        title,
        category,
      };
      dispatch(bookAdd(newBook));
      resetCategory();
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
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
