// Função para ler o arquivo JSON usando Fetch
function lerArquivoJSON(nomeArquivo) {
    return fetch(nomeArquivo)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao ler o arquivo.');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erro:', error);
            return null;
        });
}

// Função para imprimir os alunos matriculados em cada curso
function imprimirAlunosPorCurso(dados) {
    for (let curso in dados) {
        console.log(`Alunos matriculados em ${curso}:`);
        dados[curso].forEach(aluno => {
            console.log(aluno);
        });
        console.log(); // Adiciona uma linha em branco entre os cursos
    }
}

// Função principal
function main() {
    const nomeArquivo = 'materias.json'; // Nome do arquivo JSON
    lerArquivoJSON(nomeArquivo)
        .then(dados => {
            if (dados) {
                imprimirAlunosPorCurso(dados);
            } else {
                console.log('Não foi possível carregar os dados.');
            }
        });
}

main();
