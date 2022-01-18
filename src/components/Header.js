import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="naviBar d-flex">
      <h1 className="naviTitle">BookStore</h1>
      <ul className="newLinks d-flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
