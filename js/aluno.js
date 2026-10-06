// ===============================
// ALUNO - NEXOEDU
// ===============================

// Mostra o nome do aluno
const nomeAluno = document.querySelector("#nomeAluno");

const usuario = JSON.parse(
    localStorage.getItem("usuario")
);

if (nomeAluno && usuario) {
    nomeAluno.textContent = usuario.nome;
}


// ===============================
// FILTRO DE ATIVIDADES
// ===============================

const botoesFiltro =
    document.querySelectorAll(".filtro");

const atividades =
    document.querySelectorAll(".atividade");

botoesFiltro.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const filtro = botao.dataset.filtro;

        atividades.forEach(function(atividade) {

            if (
                filtro === "todas" ||
                atividade.dataset.status === filtro
            ) {
                atividade.style.display = "flex";
            } else {
                atividade.style.display = "none";
            }

        });
    });
});