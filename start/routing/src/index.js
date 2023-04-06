import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
   
  </React.StrictMode>
);
reportWebVitals();



// single page applications
  // multiple controller inrespect to multiple web pages
// pre-requistic
// functional components
// states 
// props 
// arrow function
// jsx
// hooks
// redirect-copmplete load the entire web page
// render-load only particular CompositionEvent. while other remain at rest 
// router is a mechanism which decide on the basis of url which page is execute or wjich logic is apply

// configuring routes:-npm i react-router-dom
// navigation over button clicks and links
// navigation progamatically
// dynamic routes
// nested routes
// route parameters
