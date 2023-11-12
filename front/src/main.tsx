import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './i18n';
import './index.css';
import App from './app/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </React.StrictMode>,
);
