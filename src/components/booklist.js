import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { bookRemove } from '../redux/books/thunks';

const BookList = (props) => {
  const { data: { id, title, category } } = props;
  const [percent] = useState(Math.floor(Math.random() * 100));
  const [chapter] = useState(Math.floor(Math.random() * 10));
  const dispatch = useDispatch();
  const removeFromStore = () => {
    dispatch(bookRemove(id));
  };

  return (
    <div className="book-list">
      <ul className="book-items">
        <li className="d-flex">
          <div className="boo-data-wrapper">
            <div className="book-data d-flex">
              <p className="category">{ category }</p>
              <p className="title">{ title }</p>
            </div>
            <div className="book-actions d-flex">
              <button className="bk-action" type="button">Comments</button>
              <div className="sep" />
              <button className="bk-action" onClick={removeFromStore} type="button">Remove</button>
              <div className="sep" />
              <button className="bk-action" type="button">Edit</button>
            </div>
          </div>
          <div className="book-others d-flex">
            <div className="percentage d-flex">
              <div className="circle-container">
                <CircularProgressbar
                  value={percent}
                  className="oval-2"
                  styles={buildStyles({
                    pathColor: '#0EA5E9',
                    marginRight: '10px',
                    backgroundColor: '#3e98c7',
                    trailColor: '#d6d6d6',
                  })}
                />
              </div>
              <div className="number-container">
                <p className="pernum">
                  {percent}
                  %
                </p>
                <p className="pertext">Complete</p>
              </div>
            </div>
            <div className="big-sep" />
            <div className="current-chapter d-flex">
              <p className="chap-text">CURRENT CHAPTER</p>
              <div className="chap-num d-flex">
                <p className="chap-sub-text">Chapter</p>
                <p className="chap-sub-num">
                  {chapter}
                </p>
              </div>
              <button className="chap-btn" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
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
