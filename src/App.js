import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import { Chat } from './Components/Chat/Chat';
import { MessageList } from './Components/MessageList/MessageList';
import { Form } from './Components/Form/Form';
import { AUTHORS } from './utils/constants';

// Функциональный компонент
function App(props) {

    const [messages, setMessages] = useState([]);

    const timeout = useRef();

    const addMessage = (newMsg) => {
        setMessages([...messages, newMsg])
    };

    const sendMessage = (text) => {
        addMessage({
            author: AUTHORS.name,
            text,
            id: `msg-${Date.now()}`,
        })
    };

    useEffect(() => {
        if (messages[messages.length - 1]?.author === AUTHORS.name) {
            timeout.current = setTimeout(() => {
                addMessage({
                    text: 'the robot response',
                    author: AUTHORS.robot,
                    id: `msg-${Date.now()}`,
                });
            }, 2000);

        } return () => {
            clearTimeout(timeout.current);
        }
    }, [messages]);

    return (
        <>
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    My First React App
                    <h3>Hurrah for {props.name}!</h3>
                </header>
            </div>
            <div className='app-flex'>
                <Chat />
                <div className='Big-block-messages' >
                    <MessageList messages={messages} />
                    <Form onSubmit={sendMessage} />
                </div></div>

        </>
    );
}
export default App;

// Классовый компонент
// export class AppClass extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }

// }

// export default AppClass;
