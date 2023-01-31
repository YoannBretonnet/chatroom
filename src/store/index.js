/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import {CHANGE_INPUT_MESSAGE} from './actions'

const initialState = {
    messages: [
        {
            id: 1,
            author: 'Yoyo',
            content: 'Salut!'
        },
        {
            id: 2,
            author: 'Yoyo',
            content: 'ça va?'
        },
    ],
    inputMessageValue: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_MESSAGE :
            return  {
                ...state,
                inputMessageValue: action.newValue,
            };
        case 'ADD_MESSAGE':
            return {
                ...state,
                inputMessageValue:'',
                messages: [
                    ...state.messages,
                    {
                        id: 4,
                        content: state.inputMessageValue,
                        author: 'Toto',
                    }
                ]
            };
            default:
                return state;
    }

 
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
