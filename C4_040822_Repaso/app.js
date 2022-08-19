const fs = require('fs');
const { argv } = require('process');

let jsonTareas = fs.readFileSync('./tareas.json', 'utf-8')
//console.log(jsonTareas);

let arrayTareas = JSON.parse(jsonTareas);
console.log(arrayTareas);
console.log(arrayTareas[0].titulo);

let nuevaTarea = {   
    "titulo": "xxx",
    "descripción": "ay pero k sabroso",
    "estado": "visto xD"
};

//arrayTareas.push(nuevaTarea);

let jsonFIN = JSON.stringify(arrayTareas, null, 4);
//console.log(jsonFIN);

//fs.writeFileSync('./tareas.json', jsonFIN);

//console.log(process);

//const argumento = process.argv[2];

//console.log(argumento);