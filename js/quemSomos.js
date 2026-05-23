function abrirModal(nome, cargo, desc, foto, inicial) {
    document.getElementById('modal-nome').textContent = nome;
    document.getElementById('modal-cargo').textContent = cargo;
    document.getElementById('modal-desc').textContent = desc;

    const avatar = document.getElementById('modal-avatar');

    if (foto) {
        avatar.innerHTML = `<img src="${foto}" alt="Foto de ${nome}" />`;
    } else {
        avatar.innerHTML = inicial;
    }

    document.getElementById('modal-overlay').classList.add('ativo');
    document.body.style.overflow = 'hidden'; // trava o scroll da página
}

function fecharModal() {
    document.getElementById('modal-overlay').classList.remove('ativo');
    document.body.style.overflow = ''; // libera o scroll
}

// fecha com ESC também
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModal();
});