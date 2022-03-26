import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Message } from './Components/Message/Message';

// const authorName = 'Me';
const name = 'Tatiana';
const date = '26/03/2022';
// Функчиональный компонент
function App(props) {
    const start = () => { alert("Open alert"); };
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <header className="App-header">
                My First React App
                <h3>Hurrah for {props.name}!</h3>
            </header>
            <h2><Message name={name} date={date} doStart={start} /></h2>

        </div>
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
