
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import * as atatus from 'atatus-spa';

atatus.config('1a71fb9e37be4086843358fb2e253574').install();

atatus.notify(new Error('Test Atatus Setup'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
