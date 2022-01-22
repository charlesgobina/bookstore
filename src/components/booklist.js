import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRemove } from '../redux/books/thunks';

const BookList = (props) => {
  const { data: { id, title, category } } = props;
  const dispatch = useDispatch();
  const removeFromStore = () => {
    dispatch(bookRemove(id));
  };

  return (
    <div className="book-list">
      <ul className="book-items">
        <li className="d-flex">
          <span className="title">{ title }</span>
          <span className="category">{ category }</span>
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
    category: PropTypes.string,
  }).isRequired,
};

export default BookList;
