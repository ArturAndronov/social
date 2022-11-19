import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Arthur' },
  { id: 2, name: 'Ivan' },
  { id: 3, name: 'Evgeniy' },
  { id: 4, name: 'Alexandr' },
  { id: 5, name: 'Andrew' },
  { id: 6, name: 'Vladimir' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'Wassup ' },
  { id: 4, message: 'good' },
  { id: 5, message: 'job' },
  { id: 6, message: 'asff' },
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
