import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StytchProvider } from '@stytch/react';
import { StytchUIClient } from '@stytch/vanilla-js';

const stytch = new StytchUIClient('public-token-test-54548544-9c83-4f60-95dd-174c61042a59');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
      <App />
    </StytchProvider>
  </React.StrictMode>
);