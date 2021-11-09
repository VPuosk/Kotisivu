import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import style from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <div style={style.backgroundImage}>
      <div style={style.backgroundFilter}>
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);