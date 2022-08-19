const fs = require('fs');

let archivoTareas = {
    archivo : 'tareas.json',
    leerArchivo: function(){
        console.log(this.archivo);
        let tareas = fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(tareas);
    }
}

module.exports = archivoTareas;