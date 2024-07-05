import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

function BookCard(props: any) {
  var bookData = props.book;
  var bookLink = '/book/' + bookData.id;
  return (
    <>
      <div class='book-card' key={bookData.id}>
        <div class='book-card__image'>
          <img src={bookData.imageThumbUrl} />
        </div>
        <div class='book-card__info'>
          <div class='book-card__category truncate'>{bookData.categories}</div>
          <Link class='link' to={bookLink}>
            <div class='book-card__name truncate'>{bookData.title}</div>
          </Link>
          <div class='book-card__author truncate'>{bookData.authors}</div>
        </div>
      </div>
    </>
  );
}

export default BookCard;
