import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Message({author, content}) {
const isMine = useSelector ((state) => state.nickname ===  author);
return (
    <div className= {isMine ? 'message message--mine' : 'message'}>
        <div className="message__author">{author}</div>
        <div className="message__content">{content}</div>
    </div>
    );
}

Message.protoTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Message;