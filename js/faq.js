// Abre uma resposta do FAQ por vez para manter a leitura organizada.
const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach((card) => {
    const pergunta = card.querySelector(".faq-question");
    const icone = pergunta.querySelector("span");

    pergunta.addEventListener("click", () => {
        const estaAberto = card.classList.contains("active");

        faqCards.forEach((item) => {
            item.classList.remove("active");

            const iconeItem = item.querySelector(".faq-question span");
            iconeItem.textContent = "+";
        });

        if (!estaAberto) {
            card.classList.add("active");
            icone.textContent = "-";
        }
    });
});
