// Menu hambúrguer
const menuHamburguer = document.getElementById("menu-hamburguer");
const navLinks = document.getElementById("nav-links");

if (menuHamburguer && navLinks) {
  menuHamburguer.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      menuHamburguer.textContent = "×";
      menuHamburguer.setAttribute("aria-label", "Fechar menu");
    } else {
      menuHamburguer.textContent = "☰";
      menuHamburguer.setAttribute("aria-label", "Abrir menu");
    }
  });
}