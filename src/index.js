import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);


reportWebVitals();
