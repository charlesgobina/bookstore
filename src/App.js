import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
