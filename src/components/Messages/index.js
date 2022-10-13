import React from 'react';
import { useSelector } from 'react-redux';

import Message from 'src/components/Message';

function Messages(props) {

    const messages= useSelector((state) => state.messages );

    return (
        <div className='messages'>
        {
            messages.map( (message) => (
                <div
                key={message.id}
                className="message">
                    <div>{message.author}</div>
                    <div>{message.content}</div>
                </div>
             )
            )
        }
        </div>
    );
}

export default Messages;