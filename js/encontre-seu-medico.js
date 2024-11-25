function searchDoctors() {
    const searchInput = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');
    
    // Limpa resultados anteriores
    resultsDiv.innerHTML = '';

    // Aqui você deve conectar à sua API ou base de dados
    // Exemplo de dados fictícios
    const doctors = [
        { "name": "Dra. Tatiane Mendes", "specialty": "Obstetrícia" },
        { "name": "Dr. João Pereira", "specialty": "Obstetrícia" },
        { "name": "Dra. Maria Souza", "specialty": "Obstetrícia" },
        { "name": "Dr. Carlos Silva", "specialty": "Obstetrícia" },
        { "name": "Dra. Beatriz Costa", "specialty": "Obstetrícia" },
      
        { "name": "Dr. Rafael Almeida", "specialty": "Oftalmologia" },
        { "name": "Dra. Fernanda Lima", "specialty": "Oftalmologia" },
        { "name": "Dr. Pedro Santos", "specialty": "Oftalmologia" },
        { "name": "Dra. Juliana Oliveira", "specialty": "Oftalmologia" },
        { "name": "Dr. Eduardo Fonseca", "specialty": "Oftalmologia" },
      
        { "name": "Dra. Carolina Machado", "specialty": "Ortopedia" },
        { "name": "Dr. Ricardo Moreira", "specialty": "Ortopedia" },
        { "name": "Dra. Patrícia Borges", "specialty": "Ortopedia" },
        { "name": "Dr. Fábio Couto", "specialty": "Ortopedia" },
        { "name": "Dra. Mariana Ferraz", "specialty": "Ortopedia" },
      
        { "name": "Dr. Luís Matos", "specialty": "Neurologia" },
        { "name": "Dra. Alice Barreto", "specialty": "Neurologia" },
        { "name": "Dr. Tiago Martins", "specialty": "Neurologia" },
        { "name": "Dra. Isabel Nogueira", "specialty": "Neurologia" },
        { "name": "Dr. Henrique Passos", "specialty": "Neurologia" },
      
        { "name": "Dra. Paula Mendes", "specialty": "Endocrinologia" },
        { "name": "Dr. Rodrigo Santana", "specialty": "Endocrinologia" },
        { "name": "Dra. Letícia Ferreira", "specialty": "Endocrinologia" },
        { "name": "Dr. Bruno Rodrigues", "specialty": "Endocrinologia" },
        { "name": "Dra. Carolina Brito", "specialty": "Endocrinologia" },
      
        { "name": "Dr. Daniel Campos", "specialty": "Gastroenterologia" },
        { "name": "Dra. Luísa Vieira", "specialty": "Gastroenterologia" },
        { "name": "Dr. André Teixeira", "specialty": "Gastroenterologia" },
        { "name": "Dra. Aline Ramos", "specialty": "Gastroenterologia" },
        { "name": "Dr. Felipe Soares", "specialty": "Gastroenterologia" },
      
        { "name": "Dr. Marcelo Azevedo", "specialty": "Urologia" },
        { "name": "Dra. Roberta Lima", "specialty": "Urologia" },
        { "name": "Dr. Henrique Souza", "specialty": "Urologia" },
        { "name": "Dra. Cláudia Oliveira", "specialty": "Urologia" },
        { "name": "Dr. Fernando Melo", "specialty": "Urologia" },
      
        { "name": "Dra. Gabriela Torres", "specialty": "Psiquiatria" },
        { "name": "Dr. Vinícius Gomes", "specialty": "Psiquiatria" },
        { "name": "Dra. Raquel Fernandes", "specialty": "Psiquiatria" },
        { "name": "Dr. José Almeida", "specialty": "Psiquiatria" },
        { "name": "Dra. Carla Mendes", "specialty": "Psiquiatria" },
      
        { "name": "Dr. Gustavo Lopes", "specialty": "Oncologia" },
        { "name": "Dra. Vanessa Martins", "specialty": "Oncologia" },
        { "name": "Dr. Rafael Nogueira", "specialty": "Oncologia" },
        { "name": "Dra. Amanda Silva", "specialty": "Oncologia" },
        { "name": "Dr. Diogo Castro", "specialty": "Oncologia" },
      
        { "name": "Dra. Mariana Campos", "specialty": "Fisioterapia" },
        { "name": "Dr. Thiago Oliveira", "specialty": "Fisioterapia" },
        { "name": "Dra. Renata Santos", "specialty": "Fisioterapia" },
        { "name": "Dr. Leonardo Ribeiro", "specialty": "Fisioterapia" },
        { "name": "Dra. Bruna Cardoso", "specialty": "Fisioterapia" },
      
        { "name": "Dra. Simone Batista", "specialty": "Infectologia" },
        { "name": "Dr. Felipe Lima", "specialty": "Infectologia" },
        { "name": "Dra. Juliana Alves", "specialty": "Infectologia" },
        { "name": "Dr. Marcelo Cardoso", "specialty": "Infectologia" },
        { "name": "Dra. Tatiana Rodrigues", "specialty": "Infectologia" },

        { "name": "Dra. Tatiane Oliveira", "specialty": "Ginecologia" },
        { "name": "Dra. Ana Paula Monteiro", "specialty": "Ginecologia" },
        { "name": "Dr. Marcos Andrade", "specialty": "Ginecologia" },
        { "name": "Dra. Renata Oliveira", "specialty": "Ginecologia" },
        { "name": "Dr. Fernando Costa", "specialty": "Ginecologia" },
        { "name": "Dra. Camila Souza", "specialty": "Ginecologia" },
        { "name": "Dra. Priscila Lima", "specialty": "Ginecologia" },
        { "name": "Dr. Rodrigo Nunes", "specialty": "Ginecologia" },
        { "name": "Dra. Larissa Mendes", "specialty": "Ginecologia" },
        { "name": "Dr. André Almeida", "specialty": "Ginecologia" },

        { name: 'Dr. João Silva', specialty: 'Cardiologia' },
        { name: 'Dr. Gabriel Borges', specialty: 'Cardilogia'},
        { name: 'Dr. Carlos Mendes', specialty: 'Cardiologia'},
        { name: 'Dra. Ana Clara Ribeiro', specialty: 'Cardiologia'},
        { name: 'Dr. Ricardo Alves', specialty: 'Cardiologia'},
        { name: 'Dra. Mariana Costa', specialty: 'Cardiologia'},
        { name: 'Dr. Felipe Torres', specialty: 'Cardiologia'},
        { name: 'Dra. Laura Fernandes', specialty: 'Cardiologia'},
        { name: 'Dr. Lucas Martins', specialty: 'Cardiologia'},
        { name: 'Dra. Beatriz Lima', specialty: 'Cardiologia'},
        { name: 'Dr. Eduardo Santos', specialty: 'Cardiologia'},

        { name: 'Dra. Maria Oliveira', specialty: 'Pediatria' },
        { name: 'Dr. Pedro Oliveira', specialty: 'Pediatria' },
        { name: 'Dra. Sofia Almeida', specialty: 'Pediatria' },
        { name: 'Dr. Rafael Lima', specialty: 'Pediatria' },
        { name: 'Dra. Isabela Martins', specialty: 'Pediatria' },
        { name: 'Dr. Gustavo Silva', specialty: 'Pediatria' },
        { name: 'Dra. Luiza Rocha', specialty: 'Pediatria' },
        { name: 'Dr. Bruno Santos', specialty: 'Pediatria' },
        { name: 'Dra. Camila Ferreira', specialty: 'Pediatria' },
        { name: 'Dr. Daniel Costa', specialty: 'Pediatria' },
        { name: 'Dra. Vanessa Mendes', specialty: 'Pediatria' },

        { name: 'Dr. José Souza', specialty: 'Dermatologia' },
        { name: 'Dr. Lucas Pereira', specialty: 'Dermatologia' },
        { name: 'Dra. Fernanda Souza', specialty: 'Dermatologia' },
        { name: 'Dr. André Carvalho', specialty: 'Dermatologia' },
        { name: 'Dra. Juliana Nascimento', specialty: 'Dermatologia' },
        { name: 'Dr. Felipe Gomes', specialty: 'Dermatologia' },
        { name: 'Dra. Raquel Lima', specialty: 'Dermatologia' },
        { name: 'Dr. Victor Rocha', specialty: 'Dermatologia' },
        { name: 'Dra. Aline Martins', specialty: 'Dermatologia' },
        { name: 'Dr. Bruno Almeida', specialty: 'Dermatologia' },
        { name: 'Dra. Tatiane Mendes', specialty: 'Dermatologia' },





    ];

    // Filtrar médicos com base na entrada
    const filteredDoctors = doctors.filter(doctor => 
        doctor.name.toLowerCase().includes(searchInput.toLowerCase()) || 
        doctor.specialty.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Exibir resultados
    if (filteredDoctors.length > 0) {
        filteredDoctors.forEach(doctor => {
            const doctorDiv = document.createElement('div');
            doctorDiv.innerHTML = `<strong>${doctor.name}</strong> - Especialidade: ${doctor.specialty}`;
            resultsDiv.appendChild(doctorDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>Nenhum médico encontrado.</p>';
    }
}
