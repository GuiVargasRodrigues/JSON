
function main() {
    fetch('materias.json')
        .then(response => response.json())
        .then(dados => {
            for (let curso in dados) {
                console.log(`Alunos matriculados em ${curso}:`);
                dados[curso].forEach(aluno => {
                    console.log(aluno);
                    const paluno = document.createElement("p")
                    paluno.innerText = aluno;
                    const alunosCurso =  document.querySelector(".alunosPorCurso");
                    alunosCurso.appendChild(paluno);

                });
                console.log();
            }
        })
        .catch(error => console.error('Erro:', error));
}

main();

