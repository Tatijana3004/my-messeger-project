import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import './Chat.css'

import { Form } from '../../Components/Form/Form';
import { MessageList } from '../../Components/MessageList/MessageList';
import { selectMessagesByChatId } from '../../store/messages/selectors';
import { onValue, push } from 'firebase/database';
import { auth, getMsgsListRefById, getMsgsRefById } from '../../services/firebase';



export function Chat() {
    const { id } = useParams();
    const [messages, setMessages] = useState([]);
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    //const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    //const timeout = useRef();
    //const wrapperRef = useRef();


    const sendMessage = (text) => {
        push(getMsgsListRefById(id), {
            author: auth.currentUser.email,
            text,
            id: `msg-${Date.now()}`,
        });
    };

    useEffect(() => {
        const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
            const val = snapshot.val();
            if (!snapshot.val()?.exists) {
                setMessages(null);
            } else {
                console.log(val.messageList);
                setMessages(Object.values(val.messageList || {}));
            }
        });

        return unsubscribe;
    }, [id]);

    if (!messages) {
        return <Navigate to="/chat" replace />
    }

    return (
        <section>
            <div className='big-block-messages' >
                <MessageList messages={messages} />
            </div>
            <footer>
                <Form onSubmit={sendMessage} />
            </footer>
        </section>
    );
}