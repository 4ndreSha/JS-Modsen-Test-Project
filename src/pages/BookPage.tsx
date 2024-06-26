import React from 'react';
import Header from '../Components/Header/Header';
import Books from '../Components/Books/Books';

function BookPage() {
  return (
    <>
      <Books />
      <Header />
      <Books />
      <Books />
    </>
  );
}

export default BookPage;
