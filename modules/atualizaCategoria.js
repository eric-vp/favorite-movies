export function atualizaCategoria() {
    const categoria = document.querySelector('.categoria');

    categoria.style.display = 'block';
    categoria.textContent.toLowerCase() == 'filmes populares' ?
        categoria.textContent = 'filmes favoritos' :
        categoria.textContent = 'filmes populares';
}