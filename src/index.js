import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './Menu';
import reportWebVitals from './reportWebVitals';


const AppRoot = ReactDOM.createRoot(document.getElementById('App'));
AppRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const MenuRoot = ReactDOM.createRoot(document.getElementById('Menu'));
MenuRoot.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
