const carousel = document.querySelector('.character-carousel');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');

let currentIndex = 0;

rightArrow.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const characterWidth = document.querySelector('.character').offsetWidth + 20; // Adiciona espaço entre os itens
    const offset = -currentIndex * characterWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}