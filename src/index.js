import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import './index.css';

import App from './App';
import { persistor, store } from './store';


const authorName = 'Me';

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    // </React.StrictMode >,
    document.getElementById("root")
);

// const element = <h1 className='element'>React запущен</h1>;
// ReactDOM.render(element, document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
