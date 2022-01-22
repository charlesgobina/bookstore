import axios from 'axios';
import { addBook, removeBook, fetchBook } from './books';

const bookUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NGxVcrN0SzXbJP1AZ9vH/books';

export const fetchBooks = () => async (dispatch) => {
  axios.get(bookUrl)
    .then((res) => {
      const finalRes = res.data;
      const data = Object.entries(finalRes).map(([id, bookData]) => {
        const { category, title } = bookData[0];
        return { id, category, title };
      });
      dispatch(fetchBook(data));
    });
};

export const bookAdd = (bookItem) => async (dispatch) => {
  const { id, title, category } = bookItem;
  const data = {
    item_id: id,
    title,
    category,
  };
  await axios.post(bookUrl, data);
  dispatch(addBook(bookItem));
};

export const bookRemove = (id) => async (dispatch) => {
  await axios.delete(`${bookUrl}/${id}`);
  dispatch(removeBook(id));
};
