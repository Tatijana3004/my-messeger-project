import { useEffect, useMemo, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import './Chat.css'

import { Form } from '../../Components/Form/Form';
import { MessageList } from '../../Components/MessageList/MessageList';
import { AUTHORS } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessagesByChatId } from '../../store/messages/selectors';
import { addMessage } from '../../store/messages/actions';


export function Chat() {
    const { id } = useParams();
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    // const [messages, setMessages] = useState(initMessages);

    const timeout = useRef();
    const wrapperRef = useRef();


    const sendMessage = (text) => {
        dispatch(
            addMessage({
                author: AUTHORS.name,
                text,
                id: `msg-${Date.now()}`,
            }, id
            )
        );
    };

    useEffect(() => {
        const lastMessages = messages?.[messages?.length - 1];
        if (lastMessages?.author === AUTHORS.name) {
            timeout.current = setTimeout(() => {
                dispatch(
                    addMessage({
                        text: 'the robot response',
                        author: AUTHORS.robot,
                        id: `msg-${Date.now()}`,
                    }, id
                    )
                );
            }, 2000);

        } return () => {
            clearTimeout(timeout.current);
        };
    }, [messages]);

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