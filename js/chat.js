document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    function addMessage(message, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.style.marginBottom = '10px';
        messageElement.style.padding = '5px';
        messageElement.style.borderRadius = '5px';
        messageElement.style.maxWidth = '80%';

        if (isUser) {
            messageElement.style.backgroundColor = 'rgb(28, 0, 105)';
            messageElement.style.color = 'white';
            messageElement.style.alignSelf = 'flex-end';
        } else {
            messageElement.style.backgroundColor = '#f1f0f0';
        }

        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, true);
            messageInput.value = '';

            try {
                const response = await fetch('http://localhost:5000/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ mensagem: message }),
                });

                const data = await response.json();
                addMessage(data.resposta);
            } catch (error) {
                console.error('Erro:', error);
                addMessage('Desculpe, ocorreu um erro ao processar sua solicitação.');
            }
        }
    }

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Saudação inicial
    addMessage('Olá! Sou um chatbot de avaliação de sintomas. Por favor, descreva seus sintomas e tentarei fornecer algumas informações gerais.');
});