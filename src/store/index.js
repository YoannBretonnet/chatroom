/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import {CHANGE_INPUT_MESSAGE, ADD_MESSAGE, SWITCH_SETTINGS} from './actions'
import { getHighestId } from './selectors';

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
    settingsAreOpen: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_MESSAGE :
            return  {
                ...state,
                inputMessageValue: action.newValue,
            };
        case ADD_MESSAGE:
            return {
                // je déverse mon ancien state
                ...state,
                messages: [
                    // je récupère les anciens message
                    ...state.messages,
                    // puis j'ajoute le nouveau
                    {
                        // je récupère le plus grand id et j'ajoute 1
                        id: getHighestId(state) + 1,
                        content: state.inputMessageValue,
                        author: 'Toto',
                    }
                ],
                // je remets la valeur de l'input à vide
                inputMessageValue:'',
            };
        case SWITCH_SETTINGS:
            return {
                ...state,
                settingsAreOpen: !state.settingsAreOpen
            }
            default:
                return state;
    }

 
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
