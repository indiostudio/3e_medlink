document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibir mensagem de sucesso
    document.getElementById('message-box').innerText = "Mensagem enviada com sucesso, retornaremos no seu E-mail.";

    // Limpar formulário
    document.getElementById('contact-form').reset();
});
