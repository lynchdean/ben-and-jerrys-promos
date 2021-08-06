import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tab-index="-1" aria-disabled="true">Disabled</a>
        </li>
    </ul>
  );
}

export default App;
