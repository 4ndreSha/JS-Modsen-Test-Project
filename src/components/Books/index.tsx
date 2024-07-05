import React from 'react';
import BookCard from '../BookCard';
import {getBooks} from '../../api/api';
import {useState, useEffect, useCallback} from 'react';
import ErrorMessage from '../ErrorMessage';
import './styles.css';
import { normalizeSimpleBookData } from '../ustils/normalizeBookData';

function Books({ form }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState();
  const [isError, setIsError] = useState(false);
  const [totalBooks, setTotalBooks] = useState([]);  

  const searchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getBooks(form);
      setTotalBooks(response.data.totalItems);
      const normalizedData = (response.data.items || []).map(normalizeSimpleBookData);
      setBooks(normalizedData);
    } catch (error) {
      setIsError(true);
      setErrorData({ message: 'Failed to fetch books from Google Books API:', code: error.errorCode});
      console.error('Failed to fetch books from Google Books API:', error);
    } finally {
      setLoading(false);
    }
  }, [form]);

  useEffect(() => {
    searchBooks();
  }, [searchBooks]);

  const loadMore = async () => {
    setLoading(true);
    try {
      const response = await getBooks(form, books.length, 30);

      const newBooks = (response.data.items || []).map(normalizeSimpleBookData);
      setBooks(prevBooks => [...prevBooks, ...newBooks]);
    } catch (error) {
      setIsError(true);
      setErrorData({ message: 'Failed to fetch books from Google Books API:', code: error.errorCode});
      console.error('Failed to fetch books from Google Books API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section class='books'>
        {isError ? <ErrorMessage message={errorData.message} errorCode={errorData.code}/> :
          <>
            <div class='books-found'>Found {totalBooks} results</div>
            <div class='book-card__collection'>
              {(loading && !(books.length > 0)) ? <div class="loading"/> : books.map((book, i) => <BookCard key={i} book={book} />)}
            </div>
            <button onClick={loadMore} class="load-button">
                {loading ? 'Loading...' : 'Load more'}
            </button>
          </>
        }
      </section>
    </>
  );
}

export default Books;
