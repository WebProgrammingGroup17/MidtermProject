const menuBTn = document.getElementById("menuBTN");
const smallMenu = document.getElementById("menu-small");

menuBTn.addEventListener("click", () => {
      smallMenu.style.display = "block"; 
    });


document.addEventListener("click", (event) => {
    if (!smallMenu.contains(event.target) && event.target !== menuBTn) {
    smallMenu.style.display = "none";
    }
});