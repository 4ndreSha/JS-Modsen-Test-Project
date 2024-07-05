import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<BookPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
