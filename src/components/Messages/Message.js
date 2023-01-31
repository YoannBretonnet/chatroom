import PropTypes from 'prop-types';

function Message({author, content}) {
return (
    <div className="message">
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