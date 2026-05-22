function switchTimelineTab(event, panelId) {
    // 1. Previne comportamentos inesperados do botão
    event.preventDefault();

    // 2. Remove a classe 'active' e desmarca todos os botões da linha do tempo
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
    });

    // 3. Adiciona a classe 'active' ao botão que foi clicado
    const clickedItem = event.currentTarget;
    clickedItem.classList.add('active');
    clickedItem.setAttribute('aria-selected', 'true');

    // 4. Esconde todos os painéis de texto detalhados
    const panels = document.querySelectorAll('.detail-content');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    // 5. Mostra o painel correspondente ao botão clicado
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
}