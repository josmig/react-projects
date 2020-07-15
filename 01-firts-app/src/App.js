import React from 'react';
import logo from './logo.svg';
import './App.css';
/* import HolaMundo, {Adios} from './components/HolaMundo';
import Persona from './components/Persona';
 */
import Saludar from './components/Saludar';
function App() {

  /* const username ="Miguel Pantigoso";
  const edad= "22"; */
  const user = {
    nombre: 'Miguel Pantigoso',
    edad: 22,
    sexo: 'Masculino'
  }

  const saludarFm = name => {
    console.log("Hola" + name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HolaMundo/>
        <Adios/>        <Persona/> */}
        {/* <Saludar name="Miguel Pantigoso" 
                 edad="22" /> */}
        <Saludar userInfo={user} saludo={saludarFm} />
      </header>
    </div>
  );
}

export default App;
