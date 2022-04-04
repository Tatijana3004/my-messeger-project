import { PropTypes } from 'prop-types';
import './Message.css';

export const Message = ({ author, text }) => {
    return (
        <div className="Block-message">
            <h6>{author}:</h6>
            <i>{text}</i>
        </div>
    );
};
Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}
//export const Message = () => <h3>I sent a first message</h3>; Равнозначно выражению выше

