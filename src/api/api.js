const APP_ID = 'w7Ib1BZ0vJLTJIirUdXL';
const API_ADDRESS = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

const apiGetBooks = async () => {
  const response = await fetch(API_ADDRESS)
    .then((response) => response.json());
  // const apiBooks = await response.json();
  console.log(response);
};

export default apiGetBooks;