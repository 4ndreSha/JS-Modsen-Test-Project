import React from 'react';
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookPage from './pages/BookPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="book" element={< BookPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>

)