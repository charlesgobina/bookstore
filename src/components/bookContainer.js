import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/thunks';
import AddBook from './addBook';
import BookList from './booklist';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      { books.length === 0 ? <div><p>No Books :(</p></div>
        : books.map((book) => (
          <BookList
            data={book}
            key={book.id}
          />
        ))}
      <AddBook />
    </>
  );
};

export default Books;
