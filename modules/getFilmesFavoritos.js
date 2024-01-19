export function getFilmesFavoritos() {
    return JSON.parse(localStorage.getItem('favoritos'));
}