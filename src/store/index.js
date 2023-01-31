/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

const initialState = {
    messages: [
        {
            id: 1,
            author: 'Yoyo',
            content: 'Salut!'
        },
        {
            id: 1,
            author: 'Yoyo',
            content: 'ça va?'
        },
    ],
    inputMessageValue: '',
};

const reducer = (state = initialState, action) => {
    // todo acitons

    return state;
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
