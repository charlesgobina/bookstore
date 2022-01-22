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
    <div className="add-wrapper">
      <h2 className="add-title">Add new book</h2>
      <form className="add-form d-flex" d-flex>
        <input
          required
          type="text"
          className="input-title"
          placeholder="Add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          required
          className="input-category"
          type="text"
          placeholder="Add category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          type="submit"
          className="input-button"
          onClick={(e) => submitBookToStore(e)}
        >
          Add
        </button>
      </form>
      { empty ? <small>Please fill in all fields</small>
        : '' }
    </div>
  );
};

export default AddBook;
