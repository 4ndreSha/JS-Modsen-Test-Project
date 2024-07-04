import React from 'react';
import BookInfo from '../components/BookInfo/BookInfo';
import Header from '../components/Header/Header';

function BookPage() {
  return (
    <>
      <Header followLink={true}/>
      <BookInfo />
    </>
  );
}

export default BookPage;
