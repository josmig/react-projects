const nombre = 'Jose';
const apellido = 'Pantigoso';

/* const nombre_completo = nombre + ' ' + apellido; */
const completo= `${nombre} ${apellido}`;

function saludo (nombre) {
    return 'Hola ' + nombre;
}


/* console.log(completo); */
console.log(`Llamando a un metodo :  ${saludo(completo)}`);
