/* 
    logic dùng chung
*/
// Load header
      fetch("/Assets/component/header.html")
        .then((res) => res.text())
        .then((data) => {
          document.getElementById("header").innerHTML = data;

          // --- ⬇⬇ Chỉ chạy script sau khi header được load xong ⬇⬇ ---
          const header = document.getElementById("header");
          const container = header.querySelector(".container");
          const navbar = header.querySelector(".navbar");
          const navItems = header.querySelector(".nav-items");
          const hamburger = header.querySelector(".hamburger");

          function checkMenuWrap() {
            navItems.style.display = "flex";
            const navWidth = navbar.scrollWidth;
            const containerWidth = container.clientWidth;

            if (navWidth > containerWidth) {
              header.classList.add("show-hamburger", "hide-menu");
            } else {
              header.classList.remove("show-hamburger", "hide-menu");
              navItems.classList.remove("show");
            }
            navItems.style.display = "";
          }

          window.addEventListener("resize", checkMenuWrap);
          window.addEventListener("load", checkMenuWrap);

          hamburger.addEventListener("click", () => {
            navItems.classList.toggle("show");
          });
        });
// Load footer
fetch("/Assets/component/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
