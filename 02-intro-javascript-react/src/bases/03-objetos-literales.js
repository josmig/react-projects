
//objetos litereales

const persona = {
    nombre :'Tony',
    apellido : 'Stark',
    edad: 45,    
    direaccion: {
        ciudad: 'Lima',
        zip: 12345677,
        lat: 12.45665,
        lng: 34.12398 
    }
};

/* no recomendado , no acepta
const persona2 = persona;
persona2.nombre ='Peter'; */

//Ecma6 trae spret que sirve para extraer todas las propiedades en otras palabras hacer un clon del otro objeto
const persona2 = {...persona}
persona2.nombre = 'Miguel';

/* console.table(persona2); */
console.log(persona)
console.log(persona2);
