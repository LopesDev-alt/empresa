// Seleciona todos os carrosséis na página
const carrosselContainers = document.querySelectorAll('.carrossel-container');
const carrosselItems = document.querySelectorAll('.carrossel-container .item');
const carrossels = document.querySelectorAll('.carrossel');

let autoSlideIntervals = [];

// Atualiza a posição de um carrossel específico
function updateCarrossel(carrosselContainer, currentIndex) {
    const width = carrosselContainer.querySelector('.item').clientWidth;
    carrosselContainer.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Avança para o próximo item de um carrossel
function nextSlide(carrosselContainer, currentIndex) {
    const items = carrosselContainer.querySelectorAll('.item');
    return (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
}

// Retrocede para o item anterior de um carrossel
function prevSlide(carrosselContainer, currentIndex) {
    const items = carrosselContainer.querySelectorAll('.item');
    return (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
}

// Inicia o movimento automático para todos os carrosséis
function startAutoSlides() {
    carrossels.forEach((carrossel, index) => {
        const carrosselContainer = carrossel.querySelector('.carrossel-container');
        let currentIndex = 0;

        autoSlideIntervals[index] = setInterval(() => {
            currentIndex = nextSlide(carrosselContainer, currentIndex);
            updateCarrossel(carrosselContainer, currentIndex);
        }, 10000); // Move a cada 10 segundos

        // Configura os botões
        const prevButton = carrossel.querySelector('.prev');
        const nextButton = carrossel.querySelector('.next');

        prevButton.addEventListener('click', () => {
            currentIndex = prevSlide(carrosselContainer, currentIndex);
            updateCarrossel(carrosselContainer, currentIndex);
            restartAutoSlide(index);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = nextSlide(carrosselContainer, currentIndex);
            updateCarrossel(carrosselContainer, currentIndex);
            restartAutoSlide(index);
        });
    });
}

// Reinicia o movimento automático para um carrossel específico
function restartAutoSlide(index) {
    clearInterval(autoSlideIntervals[index]);
    autoSlideIntervals[index] = setInterval(() => {
        const carrossel = carrossels[index];
        const carrosselContainer = carrossel.querySelector('.carrossel-container');
        let currentIndex = 0;
        currentIndex = nextSlide(carrosselContainer, currentIndex);
        updateCarrossel(carrosselContainer, currentIndex);
    }, 7000);
}

// Ajusta todos os carrosséis ao redimensionar a janela
window.addEventListener('resize', () => {
    carrossels.forEach((carrossel) => {
        const carrosselContainer = carrossel.querySelector('.carrossel-container');
        updateCarrossel(carrosselContainer, 0);
    });
});

// Inicializa os movimentos automáticos
startAutoSlides();
