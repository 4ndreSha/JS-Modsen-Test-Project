import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import {getBookById} from '../../api/api';
import {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import $ from 'jquery';
import ErrorMessage from '../ErrorMessage';

function BookInfo() {
  let urlParams = useParams();

  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState();
  const [isError, setIsError] = useState(false);

  const normalizeBookData = book => {
    return {
      id: book.id,
      imageUrl: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.large || book.volumeInfo.imageLinks.medium || book.volumeInfo.imageLinks.thumbnail
        : null,
      categories: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'No categories',
      title: book.volumeInfo.title || 'No title',
      authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author',
      imageClass: book.imageClass || 'defaultImageClass',
      description: book.volumeInfo.description || 'No description'
    };
  };

  const getBook = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getBookById(urlParams.id);

      const normalizedData = normalizeBookData(response.data);
      setBook(normalizedData);
    } catch (error) {
      setIsError(true);
      setErrorData({ message: 'Failed to fetch books from Google Books API:', code: error.errorCode});
      console.error('Failed to fetch books from Google Books API:', error);
    } finally {
      setLoading(false);
    }
  }, [urlParams.id]);

  useEffect(() => {
    getBook();
  }, [getBook]);

  return (
    <>
      {loading ? (
        <div class="loading"></div>
      ) : (
        <>
          {isError ? <ErrorMessage message={errorData.message} errorCode={errorData.code}/> :
            <section class='book-info'>
              <div class='book-info__image'>
                <img src={book.imageUrl} />
              </div>
              <div class='book-info__container'>
                <div class='book-info__text'>
                  <div class='book-info__category'>{book.categories}</div>
                  <div class='book-info__name'>{book.title}</div>
                  <div class='book-info__author'>{book.authors}</div>
                  <div class='book-info__description'>{book.description}</div>
                </div>
              </div>
            </section>
         }   
        </>
      )}
    </>
  );
}

export default BookInfo;
