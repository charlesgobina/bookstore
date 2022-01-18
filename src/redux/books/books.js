import React from 'react';

const Books = () => (
  <div className="book-list">
    <ul>
      <li>
        <span className="title">The Hunger Games</span>
        <button type="button">Remove</button>
      </li>
      <li>
        <span className="title">Dune</span>
        <button type="button">Remove</button>
      </li>
      <li>
        <span className="title">Capital in the Twenty-First Century</span>
        <button type="button">Remove</button>
      </li>
    </ul>

    <h2>Add a book</h2>
    <form>
      <input type="text" placeholder="Add a Book" />
      <button type="button">Add</button>
    </form>
  </div>
);

export default Books;
