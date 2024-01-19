import { getFilmesFavoritos } from "./getFilmesFavoritos.js";
import { removeFavorito } from "./removeFavorito.js";

export function adicionaAosFavoritos(filme, event) {
    const filmes = getFilmesFavoritos() || [];
    const favoriteState = {
        ehFavorito: 'icons/heart-fill.svg',
        naoEhFavorito: 'icons/Heart.svg'
    }

    if (event.target.src.includes(favoriteState.naoEhFavorito)) {
        event.target.src = favoriteState.ehFavorito;
        filmes.push(filme);
        localStorage.setItem('favoritos', JSON.stringify(filmes));
    } else {
        event.target.src = favoriteState.naoEhFavorito;
        removeFavorito(filme.id);
    }
}