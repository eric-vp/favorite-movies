import { apiMovie } from "./modules/apiMovie.js";
import { atualizaCategoria } from "./modules/atualizaCategoria.js";
import { fetchPopulares } from "./modules/fetchPopulares.js";
import { getFilmesFavoritos } from "./modules/getFilmesFavoritos.js";
import { options } from "./modules/options.js";

// const conteudo = document.querySelector('.conteudo');
const favoritosCheckbox = document.getElementById('favoritos'); 

// function getFilmesFavoritos() {
//   return JSON.parse(localStorage.getItem('favoritos'));
// }

// function adicionaAosFavoritos(filme, event) {
//   const filmes = getFilmesFavoritos() || [];
//   const favoriteState = {
//     ehFavorito: 'icons/heart-fill.svg',
//     naoEhFavorito: 'icons/Heart.svg'
//   }

//   console.log(event.target.src.includes(favoriteState.naoEhFavorito));

//   if(event.target.src.includes(favoriteState.naoEhFavorito)) {
//     event.target.src = favoriteState.ehFavorito;

//     filmes.push(filme);
//     localStorage.setItem('favoritos', JSON.stringify(filmes));
//     console.log(`adicionando ${filme.original_title} aos favoritos`);
//   } else {
//     event.target.src = favoriteState.naoEhFavorito;
    
//     removeFavorito(filme.id);
//     console.log(`removendo ${filme.original_title} dos favoritos`);
//   }
// }

// function removeFavorito(id) {
//   const filmes = getFilmesFavoritos() || [];
//   const filmeRemovido = filmes.find(filme => filme.id == id);
//   const listaAtualizada = filmes.filter(filme => filme != filmeRemovido);

//   localStorage.setItem('favoritos', JSON.stringify(listaAtualizada));
// }

// function verificaFavorito(id) {
//   const filmes = getFilmesFavoritos() || [];
//   return filmes.find(filme => filme.id == id)
// }

// function renderMovie(movie) {
//   const ehFavorito = verificaFavorito(movie.id);

//   const card = document.createElement('div');
//   card.classList.add('card');
//   conteudo.appendChild(card);

//   const imagem = document.createElement('img');
//   imagem.classList.add('card__img');
//   const posterPath = movie.poster_path;
//   imagem.src = `https://image.tmdb.org/t/p/original${posterPath}`;
//   card.append(imagem);

//   const cardInformacoes = document.createElement('div');
//   cardInformacoes.classList.add('card__informacoes');
//   card.appendChild(cardInformacoes);

//   const tituloDoFilme = document.createElement('span');
//   tituloDoFilme.classList.add('card__titulo');
//   tituloDoFilme.textContent = movie.original_title;
//   cardInformacoes.appendChild(tituloDoFilme);

//   const divNota = document.createElement('div');
//   divNota.classList.add('card__nota');
//   const nota = document.createElement('span');
//   const notaIcone = document.createElement('img');
//   notaIcone.classList.add('card__icone--star');
//   notaIcone.src = 'icons/Star.svg';
//   nota.textContent = parseFloat(movie.vote_average).toFixed(1);
//   divNota.appendChild(notaIcone);
//   divNota.appendChild(nota);

//   cardInformacoes.appendChild(divNota);

//   const divFavoritar = document.createElement('div');
//   divFavoritar.classList.add('card__favoritar');

//   const favoritarIcone = document.createElement('img');
//   favoritarIcone.classList.add('card__icone--heart');
//   favoritarIcone.src = ehFavorito ? 'icons/heart-fill.svg' : 'icons/Heart.svg';
//   favoritarIcone.addEventListener("click", (event) => {
//     adicionaAosFavoritos(movie, event);
//   });

//   const favoritarTexto = document.createElement('span');
//   favoritarTexto.textContent = 'Favoritar';

//   divFavoritar.appendChild(favoritarIcone);
//   divFavoritar.appendChild(favoritarTexto);

//   cardInformacoes.appendChild(divFavoritar);

//   const descricaoDoFilme = document.createElement('p');
//   descricaoDoFilme.textContent = movie.overview;

//   card.appendChild(descricaoDoFilme);
// }

favoritosCheckbox.addEventListener('change', function () {
  const filmes = getFilmesFavoritos() || [];
  
  if(this.checked) {
    apiMovie(filmes);
  }else{
    fetchPopulares();
  }
  atualizaCategoria();
})

// function atualizaCategoria() {
//   const categoria = document.querySelector('.categoria');

//   categoria.textContent.toLowerCase() == 'filmes populares' ? 
//   categoria.textContent = 'filmes favoritos' : 
//   categoria.textContent = 'filmes populares';
// }

// function apiMovie(movies) {
//   limpaAPagina();

//   movies.forEach(movie => {
//     renderMovie(movie);
//   })
// }

// function limpaAPagina() {
//   conteudo.innerHTML = '';
// }

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGMyMTI4MDlmM2M0YTQ0M2NhMGQzM2Q0ZTA0OWU5ZCIsInN1YiI6IjY0OWRmMTFjYzA3MmEyMDE0ZmFmMjJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5aw_-wVNkc7towwc7N8uUHlw-GA2HdoPlmwDAhDnmM'
//   }
// }

// function fetchPopulares() {
//   const urlPopular = 'https://api.themoviedb.org/3/movie/popular';
//   fetch(urlPopular, options)
//     .then(response => response.json())
//     .then(response => {
//       apiMovie(response.results)
//     })
//     .catch(err => console.error(err));

//     desativaCheckbox();
// }

// function desativaCheckbox() {
//   const input = document.getElementById('favoritos');
//   input.checked = false;
// }

fetchPopulares();

const nomeDoFilme = document.querySelector('.pesquisa__input');
const cabecalhoForm = document.querySelector('.pesquisa__form');
const categoria = document.querySelector('.categoria');

cabecalhoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch(`https://api.themoviedb.org/3/search/movie?query=${nomeDoFilme.value}&include_adult=false&language=pt-BR&page=1`, options)
    .then(response => response.json())
    .then(response => {
      apiMovie(response.results);
    })
    .catch(err => console.error(err));

  nomeDoFilme.value = '';
  categoria.style.display = 'none';
})
