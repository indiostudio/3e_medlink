// Exemplo de função para envio de formulário
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});





document.getElementById('toggle-services').addEventListener('click', function() {
    const serviceList = document.getElementById('service-list');
    const isVisible = serviceList.style.display === 'block';

    serviceList.style.display = isVisible ? 'none' : 'block';
    this.classList.toggle('rotated', !isVisible); // Rotaciona a seta
});
