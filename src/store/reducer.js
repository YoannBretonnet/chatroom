import {
CHANGE_INPUT_MESSAGE, 
ADD_MESSAGE, TOGGLE_SETTINGS, 
CHANGE_SETTINGS_FIELDS, 
SUBMIT_LOGIN, 
SUBMIT_LOGIN_SUCCESS, 
SUBMIT_LOGIN_FAILURE, 
SUBMIT_DECONNEXION
} from './actions'
import { getHighestId } from './selectors';

const initialState = {
    messages: [
        {
            id: 1,
            author: 'Mark',
            content: 'Hey!'
        },
        {
            id: 2,
            author: 'Mark',
            content: 'How are you?'
        },
    ],
    inputMessageValue: '',
    // User name
    nickname: null,
    settings: {
        areOpen: true,
        emailValue: '',
        passwordValue: '',
        isLoading: false,
        isLogged: false,
        hasFailed: false,

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
                    isLoading: false,
                    isLogged: true,
                    hasFailed: false
                }
            }
        case SUBMIT_LOGIN_FAILURE:
                return {
                    ...state,
                    settings: {
                        ...state.settings,
                        isLoading: false,
                        hasFailed: true,
                    }
                }
        case SUBMIT_DECONNEXION:
            return {
                ...state,
                nickname: null,
                settings: {
                    ...state.settings,
                    emailValue: '',
                    passwordValue: '',
                    isLogged: false,
                    hasFailed: false
                }
            }

            default:
                return state;
    }

 
}

export default reducer;