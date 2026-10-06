// ===============================
// PROFESSOR - NEXOEDU
// ===============================

const botaoAdicionarTurma =
    document.querySelector("#adicionarTurma");

const listaTurmas =
    document.querySelector("#listaTurmas");


if (botaoAdicionarTurma) {

    botaoAdicionarTurma.addEventListener("click", function() {

        const nomeTurma =
            prompt("Digite o nome da turma:");

        if (nomeTurma === null || nomeTurma.trim() === "") {
            return;
        }

        const turma = document.createElement("div");

        turma.classList.add("turma");

        turma.innerHTML = `
            <div class="turma-cor"></div>

            <div class="turma-info">
                <h3>${nomeTurma}</h3>
                <p>0 alunos</p>
            </div>
        `;

        listaTurmas.appendChild(turma);
    });
}