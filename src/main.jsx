import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ProgressProvider } from './context/ProgressContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressProvider>
      <App />
    </ProgressProvider>
  </React.StrictMode>
);
