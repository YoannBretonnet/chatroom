import { useSelector } from 'react-redux';
import './messages.scss'

import Message from './Message';

function index() {

    const messagesArray = useSelector((state) => state.messages)

    return (
        <div className="messages">
            {
                messagesArray.map(message => (
                  <Message 
                  key= {message.id}
                  {...message}
                  />
                )
                )
            }
        </div>
    );
}

export default index;