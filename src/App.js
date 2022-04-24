import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';

import './App.css';

import { Chat } from './screens/Chat/Chat';
import { ChatList } from './Components/ChatList/ChatList';
import { Profile } from './screens/Profile/Profile';
import { Home } from './screens/Home/Home';
import { ThemeContext } from './utils/ThemeContext';
import { Articles } from "./screens/Articles/Articles";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./Components/PublicRoute/PublicRoute";
import { auth } from './services/firebase';



function App() {
    const [theme, setTheme] = useState("dark");

    // const [chats, setChats] = useState(initialChats);
    // const [messages, setMessages] = useState(initMessages);

    const [authed, setAuthed] = useState(false);

    const handleLogin = () => {
        setAuthed(true);
    };

    const handleLogout = () => {
        setAuthed(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                handleLogin();
            } else {
                handleLogout();
            }
        });

        return unsubscribe;
    }, []);

    const toogleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };


    return (
        <ThemeContext.Provider value={{ theme, changeTheme: toogleTheme }}>
            <button
                onClick={() => {
                    fetch("https://simple-message-gb.herokuapp.com/message", {
                        method: "POST",
                        body: JSON.stringify({ message: "hello" }),
                    })
                        .then((r) => {
                            console.log(r);
                            if (!r.ok) {
                                throw new Error(r.status);
                            }
                            return r.json();
                        })
                        .then((res) => console.log(res))
                        .catch((e) => console.warn(e));
                }}
            >
                Click
            </button>
            <BrowserRouter>
                <header>
                    <nav className="app-header">
                        <ul>
                            <li className="title">
                                <NavLink
                                    style={({ isActive }) => ({ color: isActive ? 'red' : '#c7d7d6' })}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="title">
                                <NavLink
                                    style={({ isActive }) => ({ color: isActive ? 'red' : '#c7d7d6' })}
                                    to="/profile"
                                >
                                    Profile
                                </NavLink>
                            </li>
                            <li className="title">
                                <NavLink
                                    style={({ isActive }) => ({ color: isActive ? 'red' : '#c7d7d6' })}
                                    to="/articles"
                                >
                                    Articles
                                </NavLink>
                            </li>
                            <li className="title">
                                <NavLink
                                    style={({ isActive }) => ({ color: isActive ? 'red' : '#c7d7d6' })}
                                    to="/chat"
                                >
                                    Chat
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<PublicRoute authed={authed} />}>
                        <Route path="" element={<Home onAuth={handleLogin} />} />
                        <Route path="signup" element={<Home onAuth={handleLogin} isSignUp />} />
                    </Route>

                    <Route path="/profile" element={<PrivateRoute authed={authed} />}>
                        <Route path="" element={<Profile onLogout={handleLogout} />} />
                    </Route>

                    <Route path="/articles" element={<Articles />} />

                    <Route path="/chat" element={<ChatList />}>
                        <Route path=":id" element={<Chat />} />
                    </Route>

                    <Route path="*" element={<h4>404</h4>} />
                </Routes>

            </ BrowserRouter>
        </ThemeContext.Provider >
    );
}

export default App;
