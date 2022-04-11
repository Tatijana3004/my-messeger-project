import { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import './Chat.css'

import { Form } from '../../Components/Form/Form';
import { MessageList } from '../../Components/MessageList/MessageList';
import { AUTHORS } from '../../utils/constants';


const chats = [
    {
        id: "chat1",
        name: "Work",
    },
    {
        id: "chat2",
        name: "training",
    },
    {
        id: "chat3",
        name: "house",
    },
    {
        id: "chat4",
        name: "Olga",
    },
];

const initMessages = {
    chat1: [],
    chat2: [],
    chat3: [],
    chat4: [],
}

export function Chat() {
    const { id } = useParams();

    const [messages, setMessages] = useState(initMessages);

    const timeout = useRef();
    const wrapperRef = useRef();

    const addMessage = (newMsg) => {
        setMessages({ ...messages, [id]: [...messages[id], newMsg] })
    };

    const sendMessage = (text) => {
        addMessage({
            author: AUTHORS.name,
            text,
            id: `msg-${Date.now()}`,
        });
    };

    useEffect(() => {
        const lastMessages = messages[id]?.[messages[id]?.length - 1];
        if (lastMessages?.author === AUTHORS.name) {
            timeout.current = setTimeout(() => {
                addMessage({
                    text: 'the robot response',
                    author: AUTHORS.robot,
                    id: `msg-${Date.now()}`,
                });
            }, 2000);

        } return () => {
            clearTimeout(timeout.current);
        };
    }, [messages]);

    if (!messages[id]) {
        return <Navigate to="/chat" replace />
    }

    return (
        <div>
            {/* <div className='big-block-messages' ref={wrapperRef}> */}
            <div className='big-block-messages' ref={wrapperRef}>
                <MessageList messages={messages[id]} />
            </div>
            {/* </div> */}
            <div>
                <Form onSubmit={sendMessage} />
            </div>
        </div>
    );
}