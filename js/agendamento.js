// Função para formatar CPF
function formatarCPF(input) {
    let cpf = input.value.replace(/\D/g, '');
    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11);
    }
    if (cpf.length > 9) {
        input.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cpf.length > 6) {
        input.value = cpf.replace(/(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-');
    } else if (cpf.length > 3) {
        input.value = cpf.replace(/(\d{3})(\d{3})/, '$1.$2.');
    } else {
        input.value = cpf;
    }
}

// Função para formatar data para 'AAAA-MM-DD'
function formatarData(date) {
    const d = new Date(date);
    const ano = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const dia = String(d.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

// Configurar os limites de data no input de data
function configurarLimitesData() {
    const inputData = document.getElementById('data');
    const hoje = new Date();
    const diaSeguinte = new Date(hoje);
    diaSeguinte.setDate(hoje.getDate() + 1);
    const maxData = new Date(hoje);
    maxData.setMonth(hoje.getMonth() + 3);
    
    inputData.min = formatarData(diaSeguinte);
    inputData.max = formatarData(maxData);
}

// Validação da data digitada
function validarData(data) {
    const hoje = new Date();
    const dataSelecionada = new Date(data);
    return dataSelecionada >= hoje;
}

// Definição dos horários disponíveis por dia da semana
const horariosPorDiaDaSemana = {
    0: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"], // Domingo - sem atendimento
    1: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"], // Segunda
    2: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"], // Terça
    3: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"], // Quarta
    4: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"], // Quinta
    5: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"], // Sexta
    6: [] // Sábado
};

// Função para popular o select de horários com base na data selecionada
function popularHorarios(dataSelecionada) {
    const selectHorario = document.getElementById('horario');
    selectHorario.innerHTML = ''; // Limpa os horários anteriores

    if (!dataSelecionada) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Selecione uma data primeiro';
        option.disabled = true;
        option.selected = true;
        selectHorario.appendChild(option);
        return;
    }

    const data = new Date(dataSelecionada);
    const diaDaSemana = data.getDay(); // 0 (Domingo) a 6 (Sábado)
    const horariosDisponiveis = horariosPorDiaDaSemana[diaDaSemana] || [];

    if (horariosDisponiveis.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Nenhum horário disponível para este dia';
        option.disabled = true;
        option.selected = true;
        selectHorario.appendChild(option);
        return;
    }

    // Adiciona uma opção padrão
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecione um horário';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectHorario.appendChild(defaultOption);

    // Adiciona os horários disponíveis
    horariosDisponiveis.forEach(horario => {
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        selectHorario.appendChild(option);
    });
}

// Função para validar o CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica se todos os dígitos são iguais

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}

// Evento de mudança na data
document.getElementById('data').addEventListener('change', function() {
    if (!validarData(this.value)) {
        alert('Data inválida. Por favor, selecione uma data a partir de amanhã.');
        this.value = ''; // Limpa o campo
        document.getElementById('horario').innerHTML = ''; // Limpa horários
        return;
    }
    popularHorarios(this.value);
});

// Chamar a função para configurar os limites de data ao carregar a página
configurarLimitesData();



















// Função para formatar data para 'DD/MM/AAAA'
function formatarDataExibicao(data) {
    const d = new Date(data);
    const dia = String(d.getDate()).padStart(2, '0');
    const mes = String(d.getMonth() + 1).padStart(2, '0'); // Mes começa em 0
    const ano = d.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

// Função para salvar consulta e exibir
function salvarConsulta(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const data = document.getElementById('data').value;
    const especialidade = document.getElementById('especialidade').value;
    const horario = document.getElementById('horario').value;

    // Simulação de salvamento de consulta em um localStorage
    const consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    consultas.push({ nome, cpf, data, especialidade, horario });
    localStorage.setItem('consultas', JSON.stringify(consultas));

    alert('Consulta agendada com sucesso!');
    document.getElementById('agendamento-form').reset(); // Limpa o formulário
    popularHorarios(); // Limpa horários disponíveis

    exibirConsultas(); // Atualiza a lista de consultas
}

function exibirConsultas() {
    const divConsultas = document.getElementById('consultas-agendadas');
    divConsultas.innerHTML = ''; // Limpa a lista antes de inserir novas consultas

    const consultas = JSON.parse(localStorage.getItem('consultas')) || [];

    consultas.forEach(consulta => {
        const div = document.createElement('div');
        div.className = 'consulta'; // Adiciona a classe de estilo
        div.innerHTML = `
            <p>Nome: ${consulta.nome}</p>
            <p>CPF: ${consulta.cpf.replace(/\d(?=\d{4})/g, 'x')}</p>
            <p>Data: ${formatarDataExibicao(consulta.data)}</p>
            <p>Especialidade: ${consulta.especialidade}</p>
            <p>Horário: ${consulta.horario}</p>
        `;
        divConsultas.appendChild(div);
    });
}

// Adicionar evento ao formulário para salvar consulta
document.getElementById('agendamento-form').addEventListener('submit', salvarConsulta);

// Adicionar evento para popular horários quando a data mudar
document.getElementById('data').addEventListener('change', function () {
    popularHorarios(this.value);
});

// Inicializa limites de data
window.onload = () => {
    configurarLimitesData();
    exibirConsultas(); // Exibe consultas existentes ao carregar a página
};


// Função para exibir ou esconder a mensagem de ausência de consultas
function exibirConsultas() {
    const divConsultas = document.getElementById('consultas-agendadas');
    divConsultas.innerHTML = ''; // Limpa a lista antes de inserir novas consultas

    const consultas = JSON.parse(localStorage.getItem('consultas')) || [];

    if (consultas.length === 0) {
        // Se não houver consultas, exibe a mensagem
        divConsultas.innerHTML = '<p id="mensagem-vazia">Nenhuma consulta ou exame encontrado.</p>';
    } else {
        // Se houver consultas, esconde a mensagem e exibe as consultas
        consultas.forEach(consulta => {
            const div = document.createElement('div');
            div.className = 'consulta'; // Adiciona a classe de estilo
            div.innerHTML = `
                <p>Nome: ${consulta.nome}</p>
                <p>CPF: ${consulta.cpf.replace(/\d(?=\d{4})/g, 'x')}</p>
                <p>Data: ${formatarDataExibicao(consulta.data)}</p>
                <p>Especialidade: ${consulta.especialidade}</p>
                <p>Horário: ${consulta.horario}</p>
            `;
            divConsultas.appendChild(div);
        });
    }
}

// Modifique o evento de inicialização para garantir que a mensagem seja exibida corretamente ao carregar a página
window.onload = () => {
    configurarLimitesData();
    exibirConsultas(); // Exibe consultas existentes ao carregar a página
};










// Função para formatar CPF automaticamente enquanto o usuário digita
function formatarCPF(input) {
    let cpf = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11); // Limita o CPF a 11 caracteres
    }

    // Adiciona pontos e traços conforme o comprimento do CPF
    if (cpf.length > 9) {
        input.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cpf.length > 6) {
        input.value = cpf.replace(/(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-');
    } else if (cpf.length > 3) {
        input.value = cpf.replace(/(\d{3})(\d{3})/, '$1.$2.');
    } else {
        input.value = cpf;
    }
}

// Adicionar evento de input para formatar o CPF enquanto o usuário digita
document.getElementById('cpf').addEventListener('input', function () {
    formatarCPF(this);
});











