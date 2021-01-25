import React, { Fragment, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

/* En vez de crear un div por defecto* mejor usamos Fragment */
function App() {

  {/* <div className="App">      
    </div> */}

    //los atributos de los componentes son llamados props
    
    const fecha = new Date().getFullYear();

    //ejemplo State => El state nos puede servir para controlar si un usuario esta autenticado,registros ,formulario
    const [productos, guardarProductos] = useState([
      {id:1 , nombre: 'Camisa React.js', precio:30},
      {id:2 , nombre: 'Camisa Angular', precio:35},
      {id:3 , nombre: 'Camisa Vue.js', precio:10},
      {id:4 , nombre: 'Camisa Svelte.js', precio:15},
    ]);
  
  //El state se usa para muchas cosas en React , aca un ejemplo en carrito de compras
  const [carrito, agregarProducto] = useState([]);


  return (    
    <Fragment>
        <Header 
          titulo='Tienda virtual'
          numero={20}
        />

        <div>
          <p >Lista de productos</p>                      
            {productos.map(producto => (
              <Producto 
                key={producto.id}          
                producto={producto}
                productos = {productos}
                carrito= {carrito}
                agregarProducto = {agregarProducto}
              />
            ))}                      
        </div>
        <Carrito 
          carrito = {carrito}
          agregarProducto = {agregarProducto}
        />
        <Footer 
          fecha={fecha}
        />    
    </Fragment>    
  );
}

export default App;
