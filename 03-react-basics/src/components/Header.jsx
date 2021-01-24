import React from 'react';    // #1 debemos importar siempre la libreria para usar todo sobre React

function Header({titulo}){            // #2 creación de una función + return ahi se coloca lo que se ve en pantalla

    /* const edad = 22
    let mensaje
    if(edad > 18){
        mensaje = 'Eres mayor de edad'
    }else{
        mensaje = 'Eres menor de edad'
    }
     */
    /* console.log(props); */
    return(
        <div>    
            {/* #3 JSX se podria decir que es un JS mejorado puedes mezclar HTML.CSS.JS */}
            <h1 className="encabezado" id="titulo">{titulo}</h1> 
            {/* cuando vemos algo entre llaves quiere decir que es codigo JS*/}
            {/* <h3>{ mensaje }</h3>  */}
        </div>
    )
}

export default Header;