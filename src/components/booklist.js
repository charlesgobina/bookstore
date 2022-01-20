import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function BookList(props) {
  const data2 = props;
  const dispatch = useDispatch();
  const removeFromStore = () => {
    dispatch(removeBook(data2.id));
  };

  return (
    <div className="book-list">
      <ul className="book-items">
        <li className="d-flex">
          <span className="title">{ data2.title }</span>
          <span className="author">{ data2.author }</span>
          <button onClick={removeFromStore} type="button">Remove</button>
        </li>
      </ul>
    </div>
  );
}

export default BookList;
