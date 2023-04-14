import React from 'react';
import ReactDOM from 'react-dom/client';

import { NewsProvider } from './contexts/NewsContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>,
);
