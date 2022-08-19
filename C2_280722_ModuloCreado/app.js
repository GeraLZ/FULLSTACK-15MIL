const array1 = require('./gerardo_lobato.js');
const array2 = require('./joaquin_palacios.js');
const array3 = require('./fernando_pozzi.js');
const array4 = require('./fernando_diez.js');
const array5 = require('./carlos_malpica.js');

let personas = [array1,array2,array3,array4,array5];

for (i = 0; i < personas.length; i++){
    console.log("Hola soy " + personas[i][0] + " disfruto " + personas[i][1] + " soy de " + personas[i][2]);
}
