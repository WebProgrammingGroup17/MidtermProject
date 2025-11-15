//localStorage.clear();
const images = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');
let index = 0;
let timer;

function showSlide(i) {
  images.forEach(img => img.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  images[i].classList.add('active');
  dots[i].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % images.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showSlide(index);
}

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
    resetTimer();
  });
});

function startTimer() {
  timer = setInterval(nextSlide, 5000); // 5s đổi ảnh
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

startTimer();



