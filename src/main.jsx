import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(

  // This will enable the "router-in-all-the-pokedex-application" :---
  <BrowserRouter>
  <App />
  </BrowserRouter>
)




