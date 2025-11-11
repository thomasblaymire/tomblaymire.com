import './styles/globals.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';

import App from './App';

// Set dark mode as default
if (!localStorage.getItem('theme')) {
  document.documentElement.classList.add('dark');
} else if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_TAG);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
