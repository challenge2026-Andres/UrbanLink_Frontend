function abrirModal(nome, cargo, rm, turma, foto, github, linkedin, inicial) {
    // Preenche o modal com os dados do card selecionado.
    document.getElementById('modal-nome').textContent = nome;
    document.getElementById('modal-cargo').textContent = cargo;
    document.getElementById('modal-rm').textContent = rm;
    document.getElementById('modal-turma').textContent = turma;

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

document.querySelectorAll('.team-card').forEach((card) => {
    // Permite abrir o modal por clique ou teclado.
    card.addEventListener('click', () => {
        abrirModal(
            card.dataset.nome,
            card.dataset.cargo,
            card.dataset.rm,
            card.dataset.turma,
            card.dataset.foto,
            card.dataset.github,
            card.dataset.linkedin
        );
    });

    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            card.click();
        }
    });
});

document.querySelectorAll('.team-socials a').forEach((link) => {
    link.addEventListener('click', (event) => event.stopPropagation());
});

document.querySelector('.modal-close')?.addEventListener('click', fecharModal);
document.getElementById('modal-overlay')?.addEventListener('click', (event) => {
    if (event.target.id === 'modal-overlay') fecharModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModal();
});
