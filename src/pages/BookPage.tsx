import React from 'react'
import Header from '../Components/Header';
import Books from '../Components/Books';

function BookPage() {
    return <>
        <Books />
        <Header />
        <Books />
        <Books />
    </>
}

export default BookPage;
