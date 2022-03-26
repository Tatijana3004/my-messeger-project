import './Message.css';

export const Message = ({ name, date, doStart }) => {
    return (
        <h3 onClick={doStart} className="Block-message">
            <h6>{name}, {date}</h6>
            <i>I sent a first message</i>
        </h3>
    );
};
//export const Message = () => <h3>I sent a first message</h3>; Равнозначно выражению выше

