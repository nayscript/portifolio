let currentPainel = 1;
const painelWidth = 400;
const totalPainels = 4;


function changePanel(direction) {
    currentPainel += direction;


    if (currentPainel < 1) {
        currentPainel = totalPainels;
    } else if (currentPainel > totalPainels) {
        currentPainel = 1;
    }


    updateCarousel();
}


function updateCarousel() {
    const carrossel = document.getElementById('carrossel');
    const painelContainer = document.querySelector('.carrossel_conteudo');
    const translateValue = -painelWidth * (currentPainel - 1);
    carrossel.style.transform = `translateX(${translateValue}px)`;
    painelContainer.style.width = `${painelWidth}px`;
}


updateCarousel();
