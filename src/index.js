import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';

<<<<<<< HEAD
// Initialize GA4 with your measurement ID
ReactGA.initialize('G-NGVJV2DDML');

// Track the initial page load
ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
=======
ReactGA.initialize('G-NGVJV2DDML');
>>>>>>> 50a2b6cdadf69c33f71db41c2ec1060463546090

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

