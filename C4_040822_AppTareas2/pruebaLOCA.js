const fs = require('fs');

let tareas = fs.readFileSync('./tareas.json', 'utf-8');

let objeto = JSON.parse(tareas);

console.log(objeto[0]);
console.log(objeto[1]);
console.log(objeto[2]);
