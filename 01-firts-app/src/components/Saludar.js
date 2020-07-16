import React,{ useState, useEffect }from "react";

export default function Saludar(props){
    console.log(props.userInfo);
    console.log(props);
    /* const saludo = ()=> alert('Hola Miguel') */

    //destructuracion de objetos (props)
    const {userInfo , saludo} = props;
    const {nombre="Anonimo"} = userInfo;
    console.log(userInfo);
    console.log(saludo);

    //hooks
    const [stateCar,setStateCar] = useState(false);
    const [contar , setContar] = useState(0);

    
    useEffect(()=>{
        console.log("Total : " + contar);
    }, [contar]);

    const encenderApagar = () => {
        /* console.log("Encender / Apagar"); */
        setStateCar(preValue => !preValue);
        setContar(contar + 1 );
    }


    return(
        <div>
            <h2>Hola {props.userInfo.nombre}, tiene {props.userInfo.edad} años</h2>
            <p>Su sexo es {props.userInfo.sexo}</p>
            {/* <button onClick={saludo}>Saludar</button> */}
            <button onClick={() => saludo(nombre)}>Saludar</button>
            <p>El coche esta : {stateCar ? "Encendido" : "Apagado"} </p>
            <h4>Clicks : {contar}</h4>
            <button onClick={encenderApagar}>Encender / Apagar</button>
        </div>
    )
}