import "./ChatList.css"
import { NavLink, Outlet } from 'react-router-dom';

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

export const ChatList = () => (
    <>
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
