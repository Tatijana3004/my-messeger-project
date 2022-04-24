import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from 'react-router-dom';

import "./ChatList.css"

import { Form } from "../Form/Form";
import { MyButton } from "../MyButton/MyButton";
import { ThemeContext } from "../../utils/ThemeContext";
import { chatsRef, getChatRefById, getMsgsRefById } from "../../services/firebase";
import { onValue, remove, set } from "firebase/database";


export const ChatList = () => {
    const [chats, setChats] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };
        set(getChatRefById(newChat.id), newChat);
        set(getMsgsRefById(newChat.id), { exists: true });
    };

    const handleRemoveChat = (id) => {
        remove(getChatRefById(id));
        set(getMsgsRefById(id), null);
    };

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            console.log(snapshot.val());
            setChats(Object.values(snapshot.val() || {}));
        });
        return unsubscribe;
    }, []);

    const { changeTheme } = useContext(ThemeContext);
    return (
        <>
            <MyButton //Кнопка меняет цвет темы
                onClick={
                    changeTheme
                }
            >
                <button className="change-theme">Click to change the theme </button>
            </MyButton>
            <section className="chat-list">
                {chats.map((chat) => (
                    <article key={chat.id}>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                            to={`/chat/${chat.id}`}>{chat.name}
                        </NavLink>
                        <span onClick={() => handleRemoveChat(chat.id)}> &#128465;</span>
                    </article>
                ))}
                <footer className="forma-add-chat">
                    <Form onSubmit={handleSubmit} />
                </footer>
            </section>
            <Outlet />
        </>
    );
}
