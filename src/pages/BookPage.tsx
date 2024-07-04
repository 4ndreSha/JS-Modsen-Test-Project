import React from 'react';
import BookInfo from '../components/BookInfo';
import Header from '../components/Header';

function BookPage() {
  return (
    <>
      <Header followLink={true}/>
      <BookInfo />
    </>
  );
}

export default BookPage;
