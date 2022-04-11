import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import './App.css';

import { Chat } from './screens/Chat/Chat';
import { ChatList } from './Components/ChatList/ChatList';
import { Profile } from './screens/Profile/Profile';
import { ThemeContext } from './utils/ThemeContext';
import { store } from './store';


const Home = () => (
    <h4>Home page</h4>
)

function App() {
    const [theme, setTheme] = useState("dark");

    const toogleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }

    return (
        <Provider store={store}>
            <ThemeContext.Provider value={{ theme, changeTheme: toogleTheme }}>
                <BrowserRouter>
                    <div className="app-header">
                        <div className="title">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : '#c7d7d6' })}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </div>
                        <div className="title">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : '#c7d7d6' })}
                                to="/profile"
                            >
                                Profile
                            </NavLink>
                        </div>
                        <div className="title">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : '#c7d7d6' })}
                                to="/chat"
                            >
                                Chat
                            </NavLink>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/chat" element={<ChatList />}>
                            <Route path=":id" element={<Chat />} />
                        </Route>
                        <Route path="*" element={<h4>404</h4>} />
                    </Routes>
                </ BrowserRouter>
            </ThemeContext.Provider>
        </Provider>
    );
}

export default App;
