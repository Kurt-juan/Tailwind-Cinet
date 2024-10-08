const burgir = document.querySelector(".toggle_menu");
const headernav = document.querySelector("ul.header_nav a.navA");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    headernav.classList.toggle("open");
})