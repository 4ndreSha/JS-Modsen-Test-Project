import React from 'react';
import BookCard from '../BookCard/BookCard';
import {getBooks} from '../../api/api';
import {useState, useEffect, useCallback} from 'react';
import './styles.css';

function Books() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({title: 'mem', subject: 'all', sorting: ''});
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
      //console.log(JSON.stringify(response));
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

  return (
    <>
      <section class='books'>
        <div class='books-found'>Found {totalBooks} results</div>
        <div class='book-card__collection'>
          {loading ? <div>Loading</div>
           : books.map((book, i) => <BookCard key={i} book={book} />)}
        </div>
      </section>
    </>
  );
}

export default Books;
