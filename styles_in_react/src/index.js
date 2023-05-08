import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Api from './Api';
import reportWebVitals from './reportWebVitals';
import Count from './count';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <center>
    <Count />
    </center>
  </React.StrictMode>
);
reportWebVitals();
