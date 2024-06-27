import axios from 'axios';

const getBooks = async form => {
  const API_KEY = 'AIzaSyDiXSqDNIa5NHW-DtE-4v6b_elG8lpESh8';
  const url = 'https://www.googleapis.com/books/v1/volumes';

  const response = await axios.get(url, {
    params: {
      q: form.title || 'all',
      orderBy: form.sorting || 'relevance',
      key: API_KEY,
      maxResults: 40
    }
  });
  return response;
};

const getBookById = async bookId => {
  const API_KEY = 'AIzaSyDiXSqDNIa5NHW-DtE-4v6b_elG8lpESh8';
  const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  const response = await axios.get(url, {
    params: {
      key: API_KEY
    }
  });
  return response;
};
export {getBooks, getBookById};
