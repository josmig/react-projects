//Desestructuracion
//Asignación destructurante

const person = {
    nombre: 'Miguel',
    apellido: 'Pantigoso',
    edad: 22,
    rango: 'Soldado',
    clave: 'Hulk'
}


/* const { edad , nombre } = person; */
/* console.log( edad , nombre ) */

/*  en vez de usar esto , usamos la asignacion destruturada
    console.log(person.nombre) */


const retornaPersona =({clave, edad , nombre , rango})=>{
    /* console.log(edad,nombre,rango) */

    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat: 12.3567,
            lng: -12.314
        }
    }
}

const {nombreClave ,anios, latlng:{lat , lng}} = retornaPersona(person)
console.log(nombreClave,anios)
console.log(lat , lng)