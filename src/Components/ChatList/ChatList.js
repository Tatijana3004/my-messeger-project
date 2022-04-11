import { useContext } from "react";
import { NavLink, Outlet } from 'react-router-dom';

import "./ChatList.css"

import { MyButton } from "../MyButton/MyButton";
import { ThemeContext } from "../../utils/ThemeContext";



const chats = [
    {
        id: "chat1",
        name: "Work",
    },
    {
        id: "chat2",
        name: "Training",
    },
    {
        id: "chat3",
        name: "House",
    },
    {
        id: "chat4",
        name: "Olga",
    },
];

export const ChatList = () => {
    const { changeTheme } = useContext(ThemeContext);
    return (
        <>
            <MyButton
                onClick={
                    changeTheme
                }
            >
                <button className="change-theme">Click to change the theme </button>
            </MyButton>
            <div className="chat-list">
                <div className="title-list">
                    {chats.map((chat) => (
                        <div>
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                                to={`/chat/${chat.id}`} key={chat.id}>
                                {chat.name}
                            </NavLink>
                        </div>
                    ))}
                </div>
                <Outlet />
            </div>
        </>
    );
}
