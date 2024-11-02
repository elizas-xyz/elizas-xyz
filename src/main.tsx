import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ParticleProvider } from './lib/particle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParticleProvider>
      <App />
    </ParticleProvider>
  </React.StrictMode>,
);