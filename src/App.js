import React from 'react'
import './App.css';

import Sideber from './Sideber/Sideber'
import Chat from './Chat/Chat'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sideber />
        <Chat />
      </div>
    </div>
  );
}

export default App;
