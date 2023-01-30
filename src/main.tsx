import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';

import App from './App';

ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_TAG);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
