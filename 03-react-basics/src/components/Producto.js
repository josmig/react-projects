import React from 'react';

const Producto = ({producto}) => {
    
    const {nombre , precio, id} = producto
    
    return (     
        <div>
            <h2>El producto {nombre} tiene un precio de {precio}</h2>
        </div>
    );
}

export default Producto;