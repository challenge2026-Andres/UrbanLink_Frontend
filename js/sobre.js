function switchTimelineTab(clickedItem, panelId) {
    // Alterna o item da timeline e o painel descritivo correspondente.
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
    });
    clickedItem.classList.add('active');
    clickedItem.setAttribute('aria-selected', 'true');

    const panels = document.querySelectorAll('.detail-content');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
}

document.querySelectorAll('.timeline-item').forEach((item) => {
    const panelId = item.dataset.panel;

    item.addEventListener('mouseenter', () => switchTimelineTab(item, panelId));
    item.addEventListener('click', (event) => {
        event.preventDefault();
        switchTimelineTab(item, panelId);
    });
});
