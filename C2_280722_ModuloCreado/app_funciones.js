const array1 = require('./gerardo_lobato.js');
const array2 = require('./joaquin_palacios.js');
const array3 = require('./fernando_pozzi.js');
const array4 = require('./fernando_diez.js');
const array5 = require('./carlos_malpica.js');

let personas = [array1,array2,array3,array4,array5];

function mensaje(array_Persona){
    return "Hola soy " + array_Persona[0] + " disfruto " + array_Persona[1] + " soy de " + array_Persona[2];
}

for (i = 0; i < personas.length; i++){
    console.log(mensaje(personas[i]));
}