// Sincroniza as tabs com o carrossel da secao "Como funciona".
const sectionsComoFunciona = document.querySelectorAll(".como-funciona");

sectionsComoFunciona.forEach((section) => {
  const tabs = section.querySelectorAll(".tab");
  const cardsContainer = section.querySelector(".cards-container");
  const cards = section.querySelectorAll(".card");

  if (!cardsContainer || tabs.length === 0 || cards.length === 0) return;

  let scrollFoiPorClique = false;
  let timerScroll = null;

  function ativarTab(index) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    if (tabs[index]) {
      tabs[index].classList.add("active");
    }
  }

  function pegarPosicaoDoCard(card) {
    return card.offsetLeft - cardsContainer.offsetLeft;
  }

  function animarScroll(container, destino, duracao) {
    const inicio = container.scrollLeft;
    const distancia = destino - inicio;
    const tempoInicio = performance.now();

    function animacao(tempoAtual) {
      const tempoPassado = tempoAtual - tempoInicio;
      const progresso = Math.min(tempoPassado / duracao, 1);

      const suavizacao = progresso < 0.5
        ? 2 * progresso * progresso
        : 1 - Math.pow(-2 * progresso + 2, 2) / 2;

      container.scrollLeft = inicio + distancia * suavizacao;

      if (progresso < 1) {
        requestAnimationFrame(animacao);
      }
    }

    requestAnimationFrame(animacao);
  }

  function pegarCardMaisProximo() {
    // Mantem a tab ativa alinhada ao card visivel durante o scroll manual.
    const scrollAtual = cardsContainer.scrollLeft;
    const scrollMaximo = cardsContainer.scrollWidth - cardsContainer.clientWidth;

    if (scrollAtual <= 10) {
      return 0;
    }

    if (scrollMaximo - scrollAtual <= 10) {
      return cards.length - 1;
    }

    let cardMaisProximo = 0;
    let menorDistancia = Infinity;

    cards.forEach((card, index) => {
      const posicaoCard = pegarPosicaoDoCard(card);
      const distancia = Math.abs(scrollAtual - posicaoCard);

      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        cardMaisProximo = index;
      }
    });

    return cardMaisProximo;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const indexCard = Number(tab.dataset.target);
      const cardSelecionado = cards[indexCard];

      if (!cardSelecionado) return;

      scrollFoiPorClique = true;
      ativarTab(indexCard);

      const destino = pegarPosicaoDoCard(cardSelecionado);

      animarScroll(cardsContainer, destino, 700);

      setTimeout(() => {
        ativarTab(indexCard);
        scrollFoiPorClique = false;
      }, 750);
    });
  });

  cardsContainer.addEventListener("scroll", () => {
    if (scrollFoiPorClique) return;

    clearTimeout(timerScroll);

    timerScroll = setTimeout(() => {
      const indexCardAtual = pegarCardMaisProximo();
      ativarTab(indexCardAtual);
    }, 120);
  });
});
