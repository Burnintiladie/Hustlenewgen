document.addEventListener('DOMContentLoaded', function () {
    const playerCards = document.querySelectorAll('.Player_card');
    const cardsPerSlide = 6; 
    let currentIndex = 0;
    let intervalId; 

    function showCards(startIndex) {
        playerCards.forEach((card, i) => {
            card.style.display = i >= startIndex && i < startIndex + cardsPerSlide ? 'flex' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % playerCards.length;
        if (currentIndex > 6) {
            currentIndex = 0;
        }
        showCards(currentIndex);
    }

    intervalId = setInterval(nextSlide, 3000);

    // slide n deer hover hiisn tohioldold zogsono
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
        intervalId = null; 
    });

    // hover garsnii daraa urgeljlene slide
    sliderContainer.addEventListener('mouseleave', function () {
        if (!intervalId) {
            intervalId = setInterval(nextSlide, 3000);
        }
    });

    showCards(currentIndex);
});
