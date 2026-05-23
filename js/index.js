// Tabs da section "Como funciona"
const tabsComoFunciona = document.querySelectorAll(".como-funciona .tab");
const cardsContainer = document.querySelector(".como-funciona .cards-container");
const cardsComoFunciona = document.querySelectorAll(".como-funciona .card");

tabsComoFunciona.forEach((tab) => {
    tab.addEventListener("click", () => {
        const indexCard = Number(tab.dataset.target);
        const cardSelecionado = cardsComoFunciona[indexCard];

        tabsComoFunciona.forEach((item) => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        if (cardSelecionado && cardsContainer) {
            cardsContainer.scrollTo({
                left: cardSelecionado.offsetLeft - cardsContainer.offsetLeft,
                behavior: "smooth",
            });
        }
    });
});

if (cardsContainer) {
    cardsContainer.addEventListener("scroll", () => {
        let cardAtual = 0;

        cardsComoFunciona.forEach((card, index) => {
            const distancia = Math.abs(cardsContainer.scrollLeft - card.offsetLeft + cardsContainer.offsetLeft);

            if (distancia < 200) {
                cardAtual = index;
            }
        });

        tabsComoFunciona.forEach((tab) => {
            tab.classList.remove("active");
        });

        if (tabsComoFunciona[cardAtual]) {
            tabsComoFunciona[cardAtual].classList.add("active");
        }
    });
}