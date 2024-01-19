import { adicionaAosFavoritos } from "./adicionaAosFavoritos.js";
import { verificaFavorito } from "./verificaFavorito.js";

export function renderMovie(movie) {
    const conteudo = document.querySelector('.conteudo');
    const ehFavorito = verificaFavorito(movie.id);

    const card = document.createElement('div');
    card.classList.add('card');
    conteudo.appendChild(card);

    const imagem = document.createElement('img');
    imagem.classList.add('card__img');
    const posterPath = movie.poster_path;
    imagem.src = `https://image.tmdb.org/t/p/original${posterPath}`;
    card.append(imagem);

    const cardInformacoes = document.createElement('div');
    cardInformacoes.classList.add('card__informacoes');
    card.appendChild(cardInformacoes);

    const tituloDoFilme = document.createElement('span');
    tituloDoFilme.classList.add('card__titulo');
    tituloDoFilme.textContent = movie.original_title;
    cardInformacoes.appendChild(tituloDoFilme);

    const divNota = document.createElement('div');
    divNota.classList.add('card__nota');
    const nota = document.createElement('span');
    const notaIcone = document.createElement('img');
    notaIcone.classList.add('card__icone--star');
    notaIcone.src = 'icons/Star.svg';
    nota.textContent = parseFloat(movie.vote_average).toFixed(1);
    divNota.appendChild(notaIcone);
    divNota.appendChild(nota);

    cardInformacoes.appendChild(divNota);

    const divFavoritar = document.createElement('div');
    divFavoritar.classList.add('card__favoritar');

    const favoritarIcone = document.createElement('img');
    favoritarIcone.classList.add('card__icone--heart');
    favoritarIcone.src = ehFavorito ? 'icons/heart-fill.svg' : 'icons/Heart.svg';
    favoritarIcone.addEventListener("click", (event) => {
        adicionaAosFavoritos(movie, event);
    });

    const favoritarTexto = document.createElement('span');
    favoritarTexto.textContent = 'Favoritar';

    divFavoritar.appendChild(favoritarIcone);
    divFavoritar.appendChild(favoritarTexto);

    cardInformacoes.appendChild(divFavoritar);

    const descricaoDoFilme = document.createElement('p');
    descricaoDoFilme.textContent = movie.overview;

    card.appendChild(descricaoDoFilme);
}