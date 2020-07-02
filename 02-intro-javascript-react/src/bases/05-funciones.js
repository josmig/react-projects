

//funciones no recomendadas las normales

function saludar(nombre){
    return `Hola ${nombre}`;
}

console.log(saludar('Goku'));

//Forma recomendad para crear funcinoes / creando encima de una constante
const saludo = function(nombre){
    return `Hola ${nombre}`
}
console.log(saludo('Miguel'))
//Funcion de flecha
const despedida = (texto)=>{
    return `Adios ${texto}`;
}
console.log(despedida('Mundo'));

//ahorrando codigo
const despedida1 = (texto) => `Adios ${texto}`;
console.log(despedida1)
const despe = ()=> `Hola mundo`;
console.log(despe)



//forma de regresar objetos de manera simpllificada
const getUser = () => ({
    uid: 111111,
    username: 'Papichulo'
})
console.log(getUser())

//tarea
// convertir a arrowfuncinot
// tiene que retornar un objeto implicito
// pruebas
const getUserActive = (nombre)=>({
    
        uid:1111,
        name:nombre    
})    

console.log(getUserActive('miguel'))




