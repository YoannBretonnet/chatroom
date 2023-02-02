import {CHANGE_INPUT_MESSAGE, ADD_MESSAGE, TOGGLE_SETTINGS, CHANGE_SETTINGS_FIELDS} from './actions'
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
    settings: {
        areOpen: true,
        emailValue:'hfj',
        passwordValue: '213',

    }
    
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
        case TOGGLE_SETTINGS:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    areOpen: !state.settings.areOpen
                }
                
            }
        case CHANGE_SETTINGS_FIELDS:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    [action.inputKey]: action.newValue
                }
            }

            default:
                return state;
    }

 
}

export default reducer;