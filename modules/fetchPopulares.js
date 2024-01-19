import { apiMovie } from "./apiMovie.js";
import { desativaCheckbox } from "./desativaCheckbox.js";
import { options } from "./options.js";

export function fetchPopulares() {
    const urlPopular = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1';
    fetch(urlPopular, options)
        .then(response => response.json())
        .then(response => {
            apiMovie(response.results)
        })
        .catch(err => console.error(err));

    desativaCheckbox();
}