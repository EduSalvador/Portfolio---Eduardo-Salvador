let current = 0;
const items = document.querySelectorAll('.carousel-item');
const total = items.length;

function updateCarousel() {
    items.forEach((item, index) => {
      if (index === current) {
        item.classList.add('active'); // Adiciona a classe 'active' para mostrar o item
      } else {
        item.classList.remove('active'); // Remove a classe 'active' para ocultar o item
      }
    });
}
  
// Chamada inicial e eventos de clique
updateCarousel();
  

document.querySelector('.next').addEventListener('click', () => {
    current = (current + 1) % total;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    current = (current - 1 + total) % total;
    updateCarousel();
});  
   
