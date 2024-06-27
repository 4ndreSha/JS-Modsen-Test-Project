import axios from 'axios';

const getBooks = async form => {
  const API_KEY = process.env.API_KEY;
  const url = process.env.API_URL;

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
  const API_KEY = process.env.API_KEY;
  const url = `${process.env.API_URL}/${bookId}`;

  const response = await axios.get(url, {
    params: {
      key: API_KEY
    }
  });
  return response;
};
export {getBooks, getBookById};
