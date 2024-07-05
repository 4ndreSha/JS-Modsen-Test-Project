export const normalizeBookData = book => {
    return {
      id: book.id,
      imageUrl: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.large || book.volumeInfo.imageLinks.medium || book.volumeInfo.imageLinks.thumbnail
        : null,
      imageThumbUrl: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
      categories: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'No categories',
      title: book.volumeInfo.title || 'No title',
      authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author',
      imageClass: book.imageClass || 'defaultImageClass',
      description: book.volumeInfo.description || 'No description'
    };
  };

  export const normalizeSimpleBookData = book => {
    return {
      id: book.id,
      imageUrl: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
      categories: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'No categories',
      title: book.volumeInfo.title || 'No title',
      authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author',
      imageClass: book.imageClass || 'defaultImageClass'
    };
  };