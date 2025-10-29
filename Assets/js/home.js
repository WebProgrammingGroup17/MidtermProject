const slides = document.querySelectorAll(".hero-image img");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  slides.forEach((img, idx) => {
    img.classList.toggle("active", idx === i);
    dots[idx].classList.toggle("active", idx === i);
  });
}

// tự động đổi ảnh mỗi 2 giây
setInterval(() => {
  index = (index + 1) % slides.length; // quay lại ảnh đầu khi hết
  showSlide(index);
}, 4000);
