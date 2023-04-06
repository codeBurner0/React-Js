import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Header} from './Components/Header';
import Classc from './Components/Classc';
import Statework from './Components/Satework';
import Font from './Tailwind/Font_Size/Font';
import reportWebVitals from './reportWebVitals';
import EventHandle from './Components/EventHandling'
import EventHandlingBinding from './Components/eventHandlingBinding';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventHandlingBinding/>
  </React.StrictMode>
);
reportWebVitals();
// npm:-for windows
// npx:-for cross platform like linux,mac,wind

