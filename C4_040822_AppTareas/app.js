/* const fs = require("fs");

let tareasJson = fs.readFileSync("./tareas.json", "utf-8");
let tareas = JSON.parse(tareasJson) */

const archivo = require("./funcionesDeTareas")

const argumento = process.argv[2];

const listar = (archivo) => {
    for(i = 0;i < archivo.length;i ++){
        console.log((i + 1) + " " + archivo[i].titulo + " - " + archivo[i].estado );
    }

}

switch (argumento) {
    case "listar":
        console.log("Listado de tareas.-\n------------------------");
        listar(archivo);
        break;
    case undefined:
        console.log("Atencion - Tienes que pasar una acción");
        break;
    default: 
        console.log("no entiendo qué quieres hacer")
        break;
}