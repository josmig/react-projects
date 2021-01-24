import React, { Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

/* En vez de crear un div por defecto* mejor usamos Fragment */
function App() {

  {/* <div className="App">      
    </div> */}

  return (    
    <Fragment>
        <Header />
        <Footer />    
    </Fragment>    
  );
}

export default App;
