import React from "react";


//nombre del component y funcion deben de comenzar en mayuscula
//SOlo puede haber un export default en un component
export default function HolaMundo(){
    return(
        <div>
            <h1>Hola mundo</h1>
            <h2>Miguel Pantigoso</h2>
        </div>
    )
}

//si tenemos otra funcion podemos exportar este minicomponente de la siguiente manera
// y el principal llamarlo con {}
export function Adios(){
    return(
        <div>
            <h4>Adios Mundo</h4>
        </div>
    )
}


/* export default HolaMundo; */