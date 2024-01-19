import { getFilmesFavoritos } from "./getFilmesFavoritos.js";

export function verificaFavorito(id) {
    const filmes = getFilmesFavoritos() || [];
    return filmes.find(filme => filme.id == id)
}