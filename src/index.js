import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize'
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter basename='/matovir'>
  <App />
  </BrowserRouter>
</React.StrictMode>);