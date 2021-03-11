const navs = document.getElementById("headerNavs");
const burgerMenu = document.getElementById("headerBurgerMenu");

function openBurger() {
	burgerMenu.classList.add("active");
}
function closeBurger() {
	burgerMenu.classList.remove("active");
}

console.log(navs.classList);