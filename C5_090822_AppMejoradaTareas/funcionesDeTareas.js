const fs = require('fs');

let archivoTareas = {

    archivo: 'tareas.json', //Ruta donde encontramos el archivo JSON con el que trabajaremos.

    leerArchivo: function () { //Lee el archivo JSON
        
        json_YA_OBJETO = JSON.parse(fs.readFileSync(this.archivo, 'utf-8')); //Pasa el JSON a Objeto para manejarse con JavaScript
        
        return json_YA_OBJETO;
    },

    escribirJSON: function (arrayTareas){ //Reescribe el archivo JSON con nuevos datos
        
        let json_STRING = JSON.stringify(arrayTareas, null, 4); //Pasa el Array de Objetos manejables en JS a un formato de JSON, JSON  es como un string simple
        
        fs.writeFileSync(this.archivo, json_STRING); //Reescribe el archivo en la ruta con los nuevos datos del array ya hechos string
    },

    guardarTarea: function (newTarea){ //Guarda una nueva tarea
        let archivoTareas = this.leerArchivo(); // Array de Objetos manejable en JS, contiene todos los objetos del archivo JSON
        
        archivoTareas.push(newTarea); // Metemos el nuevo objeto newTarea a nuestro array de objetos 

        this.escribirJSON(archivoTareas); // Y reescribimos el archivo, directamente el metodo lo pasara a string y lo reescribira

    },

    filtrarTarea: function(estado){
        let archivoTareas = this.leerArchivo(); // Array de Objetos manejable en JS, contiene todos los objetos del archivo JSON
        
        let tareasFiltradas = archivoTareas.filter (function (tarea) {
            return tarea.estado == estado;
        });

        return tareasFiltradas;
    },
}
module.exports = archivoTareas;