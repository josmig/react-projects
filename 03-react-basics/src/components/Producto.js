import React from 'react';

const Producto = ({producto}) => {
    
    const {nombre , precio, id} = producto
    

    //add producto al carrito
    const seleccionarProducto = id => {
        console.log('comprando...', id);
    }
    return (     
        <div>
            <h2>El producto {nombre} tiene un precio de {precio}</h2>
            <button 
                type="button"
                onClick={ ()=> seleccionarProducto(id)}

            >Comprar</button>

        </div>
    );
}

export default Producto;