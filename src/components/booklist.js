import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookList = (props) => {
  const { data: { id, title, author } } = props;
  const dispatch = useDispatch();
  const removeFromStore = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-list">
      <ul className="book-items">
        <li className="d-flex">
          <span className="title">{ title }</span>
          <span className="author">{ author }</span>
          <button onClick={removeFromStore} type="button">Remove</button>
        </li>
      </ul>
    </div>
  );
};

BookList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookList;
