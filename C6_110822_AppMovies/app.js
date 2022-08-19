let moviesDH = require('./moviesDH');

let accion = process.argv[2];
let param3 = process.argv[3];

switch(accion) {
    case 'listar':
        console.log('Listado de Peliculas');
        console.log('--------------------');
        
        let moviesList = moviesDH.listMovies();
        
        moviesList.forEach (function (movie, index) {
            console.log(`${index+1} - ${movie}`);
        });
        console.log()
        break;

        case 'buscar':
            console.log('Listado de Peliculas');
            console.log('--------------------');
            
            let movies = moviesDH.searchMovies(param3);
            
            movies.forEach (function (movie, index) {
                console.log(`${index+1} - ${movie}`);
            });
            console.log()
            break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar, buscar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar, buscar');
        console.log('------------------------------------');
        break;
}
