import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {
    
    const {nombre , precio, id} = producto
    

    //add producto al carrito
    const seleccionarProducto = id => {
        /* console.log('comprando...', id); */
        const add = productos.filter(p => p.id === id )[0]
        agregarProducto([
            ...carrito,
            add
        ])
        /* console.log(add); */
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