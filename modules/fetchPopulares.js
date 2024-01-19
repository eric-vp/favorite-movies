import { apiMovie } from "./apiMovie.js";
import { desativaCheckbox } from "./desativaCheckbox.js";
import { options } from "./options.js";

// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGMyMTI4MDlmM2M0YTQ0M2NhMGQzM2Q0ZTA0OWU5ZCIsInN1YiI6IjY0OWRmMTFjYzA3MmEyMDE0ZmFmMjJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5aw_-wVNkc7towwc7N8uUHlw-GA2HdoPlmwDAhDnmM'
//     }
// }

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