import React from 'react';
import BookCard from '../BookCard';
import {getBooks} from '../../api/api';
import {useState, useEffect, useCallback} from 'react';
import './styles.css';

function Books({ form }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalBooks, setTotalBooks] = useState([]);

  const normalizeBookData = book => {
    return {
      id: book.id,
      imageUrl: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
      categories: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'No categories',
      title: book.volumeInfo.title || 'No title',
      authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author',
      imageClass: book.imageClass || 'defaultImageClass'
    };
  };

  const searchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getBooks(form);
      setTotalBooks(response.data.totalItems);

      const normalizedData = (response.data.items || []).map(normalizeBookData);
      setBooks(normalizedData);
    } catch (error) {
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

      const newBooks = (response.data.items || []).map(normalizeBookData);
      setBooks(prevBooks => [...prevBooks, ...newBooks]);
    } catch (error) {
      console.error('Failed to fetch books from Google Books API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section class='books'>
        <div class='books-found'>Found {totalBooks} results</div>
        <div class='book-card__collection'>
          {(loading && !(books.length > 0)) ? <div class="loading"/> : books.map((book, i) => <BookCard key={i} book={book} />)}
        </div>
        <button onClick={loadMore} class="load-button">
            {loading ? 'Loading...' : 'Load more'}
        </button>
      </section>
    </>
  );
}

export default Books;
