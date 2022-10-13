import { createStore } from 'redux';

const initialState = {
    messages : [
    {
        id: 1,
        author: "Yoyo",
        content: "Salut!",
    },
    {
        id: 2,
        author: "Yoyo",
        content: "Tu fais quoi ce soir?",
    }
    ],
    inputMessage : '',
};

