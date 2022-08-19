/* const fs = require("fs");

let tareasJson = fs.readFileSync("./tareas.json", "utf-8");
let tareas = JSON.parse(tareasJson) */

const archivoTareas = require("./ejemplo.js")

const argumento = process.argv[2];

const listar = (archivo) => {
    console.log("Listado de tareas.-\n------------------------");
    
    for(i = 0;i < archivo.length;i ++){
        console.log((i + 1) + ". " + archivo[i].titulo + " - " + archivo[i].estado );
    }

}

switch (argumento) {
    case "listar":
        listar(archivoTareas.leerArchivo());                /*AUNQUE ES UNA CUALIDAD
                                            LAS CUALIDADES QUE SON FUNCIONES DEBEN LLAMARSE CON ()*/
        break;
    case undefined:
        console.log("Atencion - Tienes que pasar una acción");
        break;
    default: 
        console.log("no entiendo qué quieres hacer")
        break;
}