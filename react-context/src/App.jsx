import './App.css';
import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import Parent from './Parent';

export const Context = createContext({
  name: 'Context App',
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Parent />
      </div>
    );
  }
}

export default App;
