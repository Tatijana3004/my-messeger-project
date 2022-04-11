import { PropTypes } from 'prop-types';
import { useContext } from 'react';

import './Message.css';

import { ThemeContext } from '../../utils/ThemeContext';

export const Message = ({ author, text, theme }) => {
    // const { theme } = useContext(ThemeContext);
    return (
        <div className="block-message">
            <h6 style={{ color: theme === "dark" ? "red" : "blue" }}>{author}:</h6>
            <i>{text}</i>
        </div>
    );
};
Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}
const withThemeContext = (Component) => (props) => {
    const { theme } = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
};

export const MessageWithBlueColor = withThemeContext(Message);


