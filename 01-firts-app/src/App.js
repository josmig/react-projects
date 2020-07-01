import React from 'react';
import logo from './logo.svg';
import './App.css';
import HolaMundo, {Adios} from './components/HolaMundo';
import Persona from './components/Persona';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo/>
        <Adios/>
        <Persona/>
      </header>
    </div>
  );
}

export default App;
