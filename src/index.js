import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppXY from './components/AppXY';
import AppMentor from './components/AppMentor';
import AppMentors from './components/AppMentors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppMentors />
  </React.StrictMode>
);

reportWebVitals();
