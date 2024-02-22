import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

/**
 * Renders the root React component App wrapped in React.StrictMode into
 * the DOM element with id 'root'. StrictMode is used to highlight
 * potential problems during development.
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
