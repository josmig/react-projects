import React from 'react';
import logo from './logo.svg';
import './App.css';
/* import HolaMundo, {Adios} from './components/HolaMundo';
import Persona from './components/Persona';
 */
import Saludar from './components/Saludar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HolaMundo/>
        <Adios/>        <Persona/> */}
        <Saludar name="Miguel Pantigoso" edad="22" />
      </header>
    </div>
  );
}

export default App;
