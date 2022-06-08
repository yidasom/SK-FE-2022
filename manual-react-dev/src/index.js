import React, { StrictMode, createElement as h } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const App = () => (
  <div className="app">
    <h1>Hello React!</h1>
  </div>
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
