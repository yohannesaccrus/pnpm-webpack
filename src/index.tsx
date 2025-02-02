import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@base/App';

import store from '@store/index';

import '@styles/index.scss';

if (typeof document !== 'undefined') {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
