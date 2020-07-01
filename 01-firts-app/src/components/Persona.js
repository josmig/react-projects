import React from "react";


export default function Person (){

    const name = (name)=>{
        return `${name} tu papi`;
    }

    return (
        <>
            <h1>Hola me llamo {name('Miguel')} </h1>
        </>
    )
}