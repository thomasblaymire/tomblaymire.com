import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga4';

import App from './App';

ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_TAG);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
