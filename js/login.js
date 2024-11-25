// Captura os elementos do formulário de cadastro e login
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const signUpError = document.getElementById('signUpError'); // Div para exibir erros de cadastro
    const signInError = document.getElementById('signInError'); // Div para exibir erros de login

    if (registerForm) {
        // Função para salvar um novo usuário no localStorage
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do formulário

            // Limpa as mensagens de erro anteriores
            signUpError.textContent = '';
            signUpError.style.display = 'none'; // Esconde o div de erro

            // Captura os valores dos campos do formulário de cadastro
            const name = document.getElementById('signUpName').value;
            const cpf = document.getElementById('signUpCPF').value;
            const email = document.getElementById('signUpEmail').value;
            const password = document.getElementById('signUpPassword').value;

            // Validação simples de CPF e e-mail
            if (!validateCPF(cpf)) {
                signUpError.textContent = 'CPF inválido! O CPF deve ter 11 dígitos.';
                signUpError.style.display = 'block'; // Mostra o div de erro
                return;
            }
            if (!validateEmail(email)) {
                signUpError.textContent = 'Email inválido! Insira um email válido.';
                signUpError.style.display = 'block'; // Mostra o div de erro
                return;
            }

            // Recupera os usuários existentes no localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Verifica se o email já está cadastrado
            const emailExists = users.some(user => user.email === email);

            if (emailExists) {
                signUpError.textContent = 'O email já está cadastrado!';
                signUpError.style.display = 'block'; // Mostra o div de erro
            } else {
                // Cria um objeto de usuário
                const newUser = { name, cpf, email, password };

                // Adiciona o novo usuário ao array de usuários
                users.push(newUser);

                // Salva o array atualizado no localStorage
                localStorage.setItem('users', JSON.stringify(users));

                // Limpa os campos do formulário após o cadastro
                registerForm.reset();
                signUpError.textContent = 'Cadastro realizado com sucesso!';
                signUpError.style.color = 'green'; // Exibe a mensagem de sucesso em verde
                signUpError.style.display = 'block'; // Mostra o div de erro
            }
        });
    }

    if (loginForm) {
        // Função para realizar o login
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do formulário

            // Limpa as mensagens de erro anteriores
            signInError.textContent = '';
            signInError.style.display = 'none'; // Esconde o div de erro

            // Captura os valores dos campos de email e senha do formulário de login
            const email = document.getElementById('signInEmail').value;
            const password = document.getElementById('signInPassword').value;

            // Recupera os usuários cadastrados no localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Verifica se existe um usuário com o email e senha fornecidos
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                // Se o login for bem-sucedido, redireciona para a página home.html
                window.location.href = 'home.html';
            } else {
                // Se os dados estiverem incorretos, exibe uma mensagem de erro estilizada
                signInError.textContent = 'Email ou senha incorretos!';
                signInError.style.color = 'red';  // Exibe o texto em vermelho
                signInError.style.fontWeight = 'bold'; // Deixa o texto em negrito
                signInError.style.display = 'block'; // Mostra o div de erro
            }
        });
    }

    // Função simples para validar o CPF (não é uma validação completa)
    function validateCPF(cpf) {
        return cpf.length === 11 && !isNaN(cpf);
    }

    // Função simples para validar o formato do email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
