const APP_ID = 'w7Ib1BZ0vJLTJIirUdXL';
const API_ADDRESS = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

function postRequest(body) {
  return (
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );
}

function deleteRequest(id) {
  return (
    {
      method: 'DELETE',
      headers: {
        accept: '*/*',
      },
      body: `{ item_id: ${id} }`,
    }
  );
}

export const apiGetBooks = async () => {
  const response = await fetch(API_ADDRESS)
    .then((response) => response.json());
  return response;
};

export const apiAddBook = async (book) => {
  fetch(API_ADDRESS, postRequest(book));
};

export const apiDeleteBook = async (id) => {
  fetch(`${API_ADDRESS}/${id}`, deleteRequest(id));
};
