import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@base/App';

import '@styles/index.scss';

if (typeof document !== 'undefined') {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
}
