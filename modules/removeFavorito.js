import { getFilmesFavoritos } from "./getFilmesFavoritos.js";

export function removeFavorito(id) {
    const filmes = getFilmesFavoritos() || [];
    const filmeRemovido = filmes.find(filme => filme.id == id);
    const listaAtualizada = filmes.filter(filme => filme != filmeRemovido);

    localStorage.setItem('favoritos', JSON.stringify(listaAtualizada));
}