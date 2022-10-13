/* eslint-disable no-underscore-dangle */
/* eslint-disable default-param-last */
import { createStore } from 'redux';

import { CHANGE_INPUT_MESSAGE } from './actions';
import { ADD_MESSAGE } from './actions';

const initialState = {
  messages: [
    {
      id: 1,
      author: 'Nooooé',
      content: 'Bizour',
    },
    {
      id: 2,
      author: 'Nonooo',
      content: 'Bonzour',
    },
  ],
  inputMessageValue: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessageValue: action.newValue,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 3,
            content: state.inputMessageValue,
            author: 'Toto',
          },
        ],
        inputMessageValue: '',
      };
    // si l'action n'est pas connue
    default:
      // je renvoie le state tel quel
      return state;
  }
};

const store = createStore(
  reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default store;
