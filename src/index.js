import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/main.css'
import './css/min480px.css'
import './css/min600px.css'
import './css/min768px.css'
import './css/min1200px.css'
import './css/colors.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



// WEBPACK FOOTER //
// ./src/index.js