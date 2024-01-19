import { limpaAPagina } from "./limpaAPagina.js";
import { renderMovie } from "./renderMovie.js";

export function apiMovie(movies) {
    limpaAPagina();

    movies.forEach(movie => {
        renderMovie(movie);
    })
}