import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from 'react-router-dom';

import "./ChatList.css"

import { addChat, deleteChat } from "../../store/chats/actions";
import { clearMessages, initMessagesForChat } from "../../store/messages/actions";
import { Form } from "../Form/Form";
import { MyButton } from "../MyButton/MyButton";
import { selectChats } from "../../store/chats/selectors";
import { ThemeContext } from "../../utils/ThemeContext";


export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };
        dispatch(addChat(newChat));
        dispatch(initMessagesForChat(newChat.id));
    };

    const handleRemoveChat = (id) => {
        dispatch(deleteChat(id));
        dispatch(clearMessages(id));
    };

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
                            to={`/chat/${chat.id}`}>
                            {chat.name}
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
