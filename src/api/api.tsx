import axios from 'axios';

const getBooks = async (form, startIndex = 0, maxResults = 10) => {
  const API_KEY = process.env.API_KEY;
  const url = process.env.API_URL;

  var q_param = 'mem';

  if(form.subject != "all")
    q_param = `${form.title}+subject:${form.subject}`
  else
    q_param = form.title

  const response = await axios.get(url, {
    params: {
      q: q_param || 'mem',
      orderBy: form.sorting || 'relevance',
      key: API_KEY,
      startIndex: startIndex,
      maxResults: maxResults,
    }
  });
  console.log(response.data.items[0].volumeInfo.previewLink);
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
