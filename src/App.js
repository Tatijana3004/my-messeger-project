import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { MessageList } from './Components/MessageList/MessageList';
import { Form } from './Components/Form/Form';
import { AUTHORS } from './utils/constants';

// Функциональный компонент
function App(props) {

    const [messages, setMessages] = useState([]);

    const addMessage = (newMsg) => {
        setMessages([...messages, newMsg])
    };

    const sendMessage = (text) => {
        addMessage({
            author: AUTHORS.name,
            text,
        })
    };

    useEffect(() => {
        let timeout;
        if (messages[messages.length - 1]?.author === AUTHORS.name) {
            timeout = setTimeout(() => {
                addMessage({
                    text: 'the robot response',
                    author: AUTHORS.robot,
                });
            }, 2000);

        } return () => {
            clearTimeout(timeout);
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
            < div >
                <MessageList messages={messages} />
                <Form onSubmit={sendMessage} />
            </div>
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
