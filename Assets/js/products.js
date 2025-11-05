document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product-item");

  products.forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
      // Chuyển sang trang chi tiết, mang theo id qua URL
      window.location.href = `/Assets/component/productDetails.html?id=${id}`;
    });
  });
});
