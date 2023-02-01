import { useSelector } from 'react-redux';
import './messages.scss'

import Message from './Message';
import { useEffect, useRef } from 'react';

function Messages() {

    const messagesArray = useSelector((state) => state.messages)
    const messagesRef = useRef(null);
    
    // Je crée un useEffect pour que le dernier message se retrouve toujours en bas à chaque nouveau rendu
    useEffect( () => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    },[messagesArray]);

    return (
        <div className="messages" 
        ref= {messagesRef}
        >
            {
                messagesArray.map(message => (
                  <Message 
                  key= {message.id}
                  // je déverse tout l'objet message dans les props du composant
                  {...message}
                  />
                )
                )
            }
        </div>
    );
}

export default Messages;