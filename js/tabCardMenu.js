// Tabs + scroll dos cards da section "como-funciona"
const sectionsComoFunciona = document.querySelectorAll(".como-funciona");

sectionsComoFunciona.forEach((section) => {
  const tabs = section.querySelectorAll(".tab");
  const cardsContainer = section.querySelector(".cards-container");
  const cards = section.querySelectorAll(".card");

  let clicouNaTab = false;

  if (!cardsContainer || tabs.length === 0 || cards.length === 0) return;

  function ativarTab(index) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    if (tabs[index]) {
      tabs[index].classList.add("active");
    }
  }

  function atualizarTabPeloScroll() {
    const scrollAtual = cardsContainer.scrollLeft;
    const scrollMaximo = cardsContainer.scrollWidth - cardsContainer.clientWidth;

    if (scrollAtual <= 10) {
      ativarTab(0);
      return;
    }

    if (scrollMaximo - scrollAtual <= 10) {
      ativarTab(cards.length - 1);
      return;
    }

    let cardMaisProximo = 0;
    let menorDistancia = Infinity;

    cards.forEach((card, index) => {
      const posicaoCard = card.offsetLeft - cardsContainer.offsetLeft;
      const distancia = Math.abs(scrollAtual - posicaoCard);

      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        cardMaisProximo = index;
      }
    });

    ativarTab(cardMaisProximo);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const indexCard = Number(tab.dataset.target);
      const cardSelecionado = cards[indexCard];

      if (!cardSelecionado) return;

      clicouNaTab = true;

      ativarTab(indexCard);

      cardsContainer.scrollTo({
        left: cardSelecionado.offsetLeft - cardsContainer.offsetLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        clicouNaTab = false;
      }, 600);
    });
  });

  cardsContainer.addEventListener("scroll", () => {
    if (clicouNaTab) return;

    atualizarTabPeloScroll();
  });
});
