/* 
    logic dùng chung
*/
// Load header

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const menuBtn = header.querySelector("#menuBTN");
  const menuSmall = header.querySelector("#menu-small");
  const searchIconMobile = header.querySelector(".hamburger .bi-search");
  const searchBoxMobile = header.querySelector(".search-box-mobile");

  function closeAll() {
    if (menuSmall) menuSmall.style.display = "none";
    if (searchBoxMobile) searchBoxMobile.style.display = "none";
  }

  if (menuBtn && menuSmall) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (searchBoxMobile) searchBoxMobile.style.display = "none";
      menuSmall.style.display =
        menuSmall.style.display === "block" ? "none" : "block";
    });
  }

  if (searchIconMobile && searchBoxMobile) {
    searchIconMobile.addEventListener("click", (e) => {
      e.stopPropagation();
      if (menuSmall) menuSmall.style.display = "none";
      searchBoxMobile.style.display =
        searchBoxMobile.style.display === "block" ? "none" : "block";
      searchBoxMobile.querySelector("input")?.focus();
    });
    searchBoxMobile.addEventListener("click", (e) => e.stopPropagation());
  }

  document.addEventListener("click", closeAll);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeAll();
  });
});

