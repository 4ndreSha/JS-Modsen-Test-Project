import React from 'react';
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookPage from './pages/BookPage';



const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/book" element={< BookPage />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
)