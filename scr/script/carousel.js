// Seleciona o elemento com a classe 'carousel-slide', que contém os itens do carrossel
const carouselSlide = document.querySelector('.carousel-slide');

// Seleciona todos os elementos com a classe 'carousel-item', que são os itens individuais do carrossel
const items = document.querySelectorAll('.carousel-item');

// Conta o número total de itens no carrossel
const totalItems = items.length;

// Variável para rastrear o índice do item atualmente visível
let currentIndex = 0;

// Define o número de itens visíveis no carrossel ao mesmo tempo
const visibleItems = 3;

// Obtém a largura de um item individual no carrossel, que será usada para calcular o deslocamento
const itemWidth = items[0].clientWidth;

// Função para mover o carrossel com base no índice atual
function moveCarousel() {
  // Move o contêiner 'carouselSlide' horizontalmente, com base no índice atual e na largura de um item
  carouselSlide.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
}

// Adiciona um ouvinte de eventos ao botão "próximo" (nextBtn) que será acionado quando for clicado
document.getElementById('nextBtn').addEventListener('click', () => {
  // Verifica se ainda há mais itens para avançar, sem exceder o limite de itens
  if (currentIndex < totalItems - visibleItems) {
    // Se for possível, incrementa o índice para avançar para o próximo item
    currentIndex++;
  } else {
    // Se já estiver no final, volta para o início do carrossel
    currentIndex = 0;
  }
  // Chama a função para mover o carrossel após atualizar o índice
  moveCarousel();
});

// Adiciona um ouvinte de eventos ao botão "anterior" (prevBtn) que será acionado quando for clicado
document.getElementById('prevBtn').addEventListener('click', () => {
  // Verifica se ainda há mais itens para retroceder
  if (currentIndex > 0) {
    // Se for possível, decrementa o índice para voltar ao item anterior
    currentIndex--;
  } else {
    // Se já estiver no início, vai para o último conjunto de itens visíveis no carrossel
    currentIndex = totalItems - visibleItems;
  }
  // Chama a função para mover o carrossel após atualizar o índice
  moveCarousel();
});
