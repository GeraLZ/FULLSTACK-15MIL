let funcionesTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];
let argumento3 = process.argv[3];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = funcionesTareas.leerArchivo();

        tareas.forEach (function (tarea, index) {
            console.log(`${index+1} - ${tarea.titulo} - ${tarea.estado}`);
        });
        console.log()
        break;
    
    case 'crear':
        let tareaCreada = argumento3;

        let objetoTarea = {   
            "titulo": tareaCreada,
            "estado": "Pendiente"
        };    

        if (tareaCreada === undefined) {
            console.log('Debes nombrar tu tarea \nEJ: appV2.js crear "nombreTarea"');
            console.log('-------------------------------');
        }else{ 
            console.log(`Creando la tarea ${tareaCreada} \n --------------------------`);
            funcionesTareas.guardarTarea(objetoTarea);
        }
        
        break;
    
    case 'filtrar':
        let estado = argumento3;

        console.log('Listado de tareas filtradas');
        console.log('---------------------------');
        let tareasFiltradas = funcionesTareas.filtrarTarea(estado);
        
        tareasFiltradas.forEach (function (tarea, index) {
            console.log(`${index+1} - ${tarea.titulo} - ${tarea.estado}`);
        });
        console.log()
        break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar, crear');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar, crear');
        console.log('------------------------------------');
        break;
}
