import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="navi-bar d-flex">
      <h1 className="navi-title">Bookstore CMS</h1>
      <ul className="new-links d-flex">
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
