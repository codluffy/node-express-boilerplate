import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Greetings() {
    return (
        <div>
            <h2>My First React App</h2>
            {/*<p>This is a paragraph</p>*/}
            Enter the number: <br/>
            <input type="number" />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Greetings />
);
