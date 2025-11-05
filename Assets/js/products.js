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
// Lấy các phần tử cần thao tác
const filterBtn = document.getElementById("filter-btn");
const filterPanel = document.getElementById("filter-panel");

// Khi bấm nút "Bộ lọc"
filterBtn.addEventListener("click", () => {
    // Nếu panel đang mở → đóng lại
    if (filterPanel.classList.contains("active")) {
        filterPanel.classList.remove("active");
        document.body.classList.remove("filter-open");
    }
    // Nếu panel đang đóng -> mở ra
    else {
        filterPanel.classList.add("active");
        document.body.classList.add("filter-open");
    }
});

// Khi bấm ra ngoài phần panel -> đóng lại
document.addEventListener("click", (e) => {
    if (
        !filterPanel.contains(e.target) &&
        !filterBtn.contains(e.target)
    ) {
        filterPanel.classList.remove("active");
        document.body.classList.remove("filter-open");
    }
});





