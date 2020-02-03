import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
    console.log('service worker')
    window.addEventListener('load', function() {
        serviceWorker.register();
    });
  }
