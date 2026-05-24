const form = document.getElementById("form-contato");
const mensagem = document.getElementById("message");
const nomeMensagem = document.getElementById("nome-message")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    mensagem.textContent = ""
    nomeMensagem.textContent = ""

    const nome = document.getElementById("nome").value.trim();
    const nomeSplit = nome.split(/\s+/);
    if (nomeSplit.length <= 1) {
        nomeMensagem.textContent = "Deve conter nome e sobrenome."
        nomeMensagem.style.marginTop = "1rem";
    } else {
        const textoMensagemSucesso = `Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com Sucesso.`
        mensagem.textContent = textoMensagemSucesso
        mensagem.style.marginTop = "1rem";
        form.reset()
    }

})