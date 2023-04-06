import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Header from './Components/Header';
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
);
reportWebVitals();
