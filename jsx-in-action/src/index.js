import 'styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConditionalRendering } from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConditionalRendering />
  </StrictMode>
);
