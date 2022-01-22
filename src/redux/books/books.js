const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  if (action.type === ADD_BOOK) {
    return [...state, action.payload];
  } if (action.type === REMOVE_BOOK) {
    const uState = state.filter((book) => book.id !== action.payload);
    return uState;
  } if (action.type === FETCH_BOOK) {
    return action.payload;
  }
  return state;
};

export default reducer;
