import React from "react";

export default function Saludar(props){
    console.log(props.userInfo);
    console.log(props);
    /* const saludo = ()=> alert('Hola Miguel') */

    //destructuracion de objetos (props)
    const {userInfo , saludo} = props;
    const {nombre} = userInfo;
    console.log(userInfo);
    console.log(saludo);
    return(
        <div>
            <h2>Hola {props.userInfo.nombre}, tiene {props.userInfo.edad} años</h2>
            <p>Su sexo es {props.userInfo.sexo}</p>
            {/* <button onClick={saludo}>Saludar</button> */}
            <button onClick={() => saludo(nombre)}>Saludar</button>
        </div>
    )
}