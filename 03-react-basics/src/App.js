import React, { Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

/* En vez de crear un div por defecto* mejor usamos Fragment */
function App() {

  {/* <div className="App">      
    </div> */}

    //los atributos de los componentes son llamados props

    const fecha = new Date().getFullYear();

  return (    
    <Fragment>
        <Header 
          titulo='Tienda virtual'
          numero={20}
        />
        <Footer 
          fecha={fecha}
        />    
    </Fragment>    
  );
}

export default App;
