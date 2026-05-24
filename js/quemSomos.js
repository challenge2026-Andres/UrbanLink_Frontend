function abrirModal(nome, cargo, rm, foto, github, linkedin, inicial) {
    document.getElementById('modal-nome').textContent = nome;
    document.getElementById('modal-cargo').textContent = cargo;
    document.getElementById('modal-rm').textContent = rm;

    const avatar = document.getElementById('modal-avatar');

    if (foto) {
        avatar.innerHTML = `<img src="${foto}" alt="Foto de ${nome}" />`;
    } else {
        avatar.innerHTML = inicial;
    }

    const modalGithub = document.getElementById('modal-github');
    const modalLinkedin = document.getElementById('modal-linkedin');

    modalGithub.href = github;
    modalGithub.setAttribute('aria-label', `GitHub de ${nome}`);

    modalLinkedin.href = linkedin;
    modalLinkedin.setAttribute('aria-label', `LinkedIn de ${nome}`);

    document.getElementById('modal-overlay').classList.add('ativo');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    document.getElementById('modal-overlay').classList.remove('ativo');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModal();
});