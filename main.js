import { apiMovie } from "./modules/apiMovie.js";
import { atualizaCategoria } from "./modules/atualizaCategoria.js";
import { fetchPopulares } from "./modules/fetchPopulares.js";
import { getFilmesFavoritos } from "./modules/getFilmesFavoritos.js";
import { options } from "./modules/options.js";

const favoritosCheckbox = document.getElementById('favoritos');

favoritosCheckbox.addEventListener('change', function () {
  const filmes = getFilmesFavoritos() || [];
  
  if(this.checked) {
    apiMovie(filmes);
  }else{
    fetchPopulares();
  }
  atualizaCategoria();
});

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
});
