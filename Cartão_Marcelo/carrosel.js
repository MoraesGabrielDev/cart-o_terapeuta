const content = document.querySelector('.carousel-content');
const items = document.querySelectorAll('.carousel-item');
const visibleCount = 2;
let current = 0;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 24; // 24 = gap
  content.style.transform = `translateX(-${current * itemWidth}px)`;
}

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
  current = Math.max(current - 1, 0);
  updateCarousel();
});

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
  current = Math.min(current + 1, items.length - visibleCount);
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();