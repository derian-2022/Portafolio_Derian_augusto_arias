const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");
const bxMenu = document.querySelector(".bx-menu");

function handleMenu() {
    menu.classList.toggle("menu_show");
}


bxMenu.addEventListener("click", handleMenu);

links.forEach((link) => {
    link.addEventListener("click", handleMenu)
});