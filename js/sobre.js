function switchTimelineTab(event, panelId) {
    event.preventDefault();
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
    });

    const clickedItem = event.currentTarget;
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
