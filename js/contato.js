const form = document.getElementById("form-contato");
const feedback = document.getElementById("form-feedback");

// Centraliza os elementos de mensagem para limpar e preencher feedbacks.
const mensagensErro = {
    nome: document.getElementById("nome-message"),
    email: document.getElementById("email-message"),
    assunto: document.getElementById("assunto-message"),
    mensagem: document.getElementById("mensagem-message"),
};

function limparMensagens() {
    Object.values(mensagensErro).forEach((campoMensagem) => {
        campoMensagem.textContent = "";
    });

    feedback.textContent = "";
    feedback.className = "feedback-box";
}

function validarEmail(email) {
    // Validacao simples para bloquear formatos claramente invalidos.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    limparMensagens();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value.trim();
    let formularioValido = true;

    if (nome.split(/\s+/).length <= 1) {
        mensagensErro.nome.textContent = "Informe nome e sobrenome.";
        formularioValido = false;
    }

    if (!validarEmail(email)) {
        mensagensErro.email.textContent = "Informe um e-mail válido.";
        formularioValido = false;
    }

    if (!assunto) {
        mensagensErro.assunto.textContent = "Selecione um assunto.";
        formularioValido = false;
    }

    if (mensagem.length < 20) {
        mensagensErro.mensagem.textContent = "Descreva sua mensagem com pelo menos 20 caracteres.";
        formularioValido = false;
    }

    if (!formularioValido) {
        feedback.textContent = "Revise os campos destacados antes de enviar.";
        feedback.classList.add("feedback-error");
        return;
    }

    feedback.textContent = `Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`;
    feedback.classList.add("feedback-success");
    form.reset();
});
