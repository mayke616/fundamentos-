 document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelector('.carousel-items');
    const itemCount = document.querySelectorAll('.carousel-item').length;
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let index = 0;

    function updateCarousel() {
      items.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + itemCount) % itemCount;
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % itemCount;
      updateCarousel();
    });
  });