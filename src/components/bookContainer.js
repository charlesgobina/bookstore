import React from 'react';
import { useSelector } from 'react-redux';

import AddBook from './addBook';
import BookList from './booklist';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <>
      { books.length === 0 ? <div><p>No Books :(</p></div>
        : books.map((book) => (
          <BookList
            id={book.id}
            author={book.author}
            title={book.title}
            key={book.id}
          />
        ))}
      <AddBook />
    </>
  );
};

export default Books;
