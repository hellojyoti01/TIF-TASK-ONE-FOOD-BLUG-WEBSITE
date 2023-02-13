import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const MobileViewContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MobileViewContext.Provider value={window.screen.width < 600}>
            <App />
      </MobileViewContext.Provider>
  </React.StrictMode>
);



