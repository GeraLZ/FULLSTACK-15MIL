let moviesDH = {

    movies: require('./movies.js'), //Ruta donde encontramos todo el array de objetos literales

    listMovies: function () { //
        let lista = [];
        this.movies.forEach (function (movie) {
            lista.push(movie.title);
        });
        //console.log(lista);
        return lista;
    },
    searchMovies: function (idMovie) {
        
    }
}

module.exports = moviesDH;