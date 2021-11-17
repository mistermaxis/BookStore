const apiToState = (apiData) => {
  const bookArray = [];
  const keys = Object.keys(apiData);

  keys.forEach((key) => {
    const book = {
      item_id: key,
      title: apiData[key][0].title,
      category: apiData[key][0].category,
    };
    bookArray.push(book);
  });
  return bookArray;
};

export default apiToState;