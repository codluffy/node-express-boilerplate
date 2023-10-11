import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Greetings() {
  return <h2>My First React App</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Greetings />
);
