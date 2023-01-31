import './messages.scss'

function index() {
    return (
        <div className="messages">
            <div className="message">
                <div className="message__author">Auteur</div>
                <div className="message__content">Message</div>
            </div>
            <div className="message">
                <div className="message__author">Auteur</div>
                <div className="message__content">Message</div>
            </div>
        </div>
    );
}

export default index;