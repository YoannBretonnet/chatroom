import {CHANGE_INPUT_MESSAGE, ADD_MESSAGE, TOGGLE_SETTINGS, CHANGE_SETTINGS_FIELDS, SUBMIT_LOGIN, SUBMIT_LOGIN_SUCCESS} from './actions'
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
    // User name
    nickname: null,
    settings: {
        areOpen: true,
        emailValue:'bouclierman@herocorp.io',
        passwordValue: 'jennifer',
        isLoading: false,

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
                ...state,
                messages: [
                    ...state.messages,
                    {
                        // je récupère le plus grand id et j'ajoute 1
                        id: getHighestId(state) + 1,
                        content: state.inputMessageValue,
                        author: state.nickname,
                    }
                ],
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
        case SUBMIT_LOGIN:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    isLoading: true,
                }
             }
        case SUBMIT_LOGIN_SUCCESS:
            return {
                ...state,
                nickname: action.nickname,
                settings: {
                    ...state.settings,
                    isLoading: false
                }
            }

            default:
                return state;
    }

 
}

export default reducer;