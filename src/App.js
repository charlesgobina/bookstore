import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/bookContainer';
import Categories from './components/categories';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
