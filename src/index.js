import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppXY from './components/AppXY';
import AppMentor from './components/AppMentor';
import AppMentors from './components/AppMentors';
import AppForm from './components/AppForm';
import AppWrap from './components/AppWrap';
import AppTheme from './components/AppTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppTheme/>
  </React.StrictMode>
);

reportWebVitals();
