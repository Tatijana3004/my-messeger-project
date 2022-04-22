import { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import './Chat.css'

import { Form } from '../../Components/Form/Form';
import { MessageList } from '../../Components/MessageList/MessageList';
import { selectMessagesByChatId } from '../../store/messages/selectors';
import { addMessageWithReply } from "../../store/messages/actions";
import { AUTHORS } from '../../utils/constants';



export function Chat() {
    const { id } = useParams();
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    const timeout = useRef();
    const wrapperRef = useRef();


    const sendMessage = (text) => {
        dispatch(
            addMessageWithReply({
                author: AUTHORS.name,
                text,
                id: `msg-${Date.now()}`,
            }, id
            )
        );
    };

    if (!messages) {
        return <Navigate to="/chat" replace />
    }

    return (
        <section>
            <div className='big-block-messages' ref={wrapperRef}>
                <MessageList messages={messages} />
            </div>
            <footer>
                <Form onSubmit={sendMessage} />
            </footer>
        </section>
    );
}