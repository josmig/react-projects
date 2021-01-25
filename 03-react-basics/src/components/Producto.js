import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {
    
    const {nombre , precio, id} = producto
    

    //add producto al carrito
    const seleccionarProducto = id => {
        /* console.log('comprando...', id); */
        const add = productos.filter(p => p.id === id )[0]
        //usamos el metodo que viene con el state para agregar al carro
        agregarProducto([
            ...carrito, //hacemos una copia para agregar y que no se borre el producto
            add //agregamos el producto seleccionado
        ])
        /* console.log(add); */        
    }
    //eliminar producto
    const eliminarProducto= id =>{
        const productos  = carrito.filter(p => producto.id !== id)
        //Colocar los productos en el state
        agregarProducto(productos)
    }
    return (     
        <div>
            <p>{nombre}</p>
            <p>${precio}</p>

            { productos
            ?
                (
                    <button 
                    type="button"
                    onClick={ ()=> seleccionarProducto(id)}
                    >Comprar</button>
                )
            :
                (
                    <button 
                    type="button"
                    onClick={ ()=> eliminarProducto(id)}    
                    >Eliminar</button>   
                )
            }
            

        </div>
    );
}

export default Producto;