// ===============================
// ATIVIDADES - NEXOEDU
// ===============================

const formularioAtividade =
    document.querySelector("#formAtividade");

if (formularioAtividade) {

    formularioAtividade.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const titulo =
                document.querySelector("#titulo").value;

            const disciplina =
                document.querySelector("#disciplina").value;

            const descricao =
                document.querySelector("#descricao").value;

            const dataEntrega =
                document.querySelector("#dataEntrega").value;


            if (
                titulo === "" ||
                disciplina === "" ||
                descricao === "" ||
                dataEntrega === ""
            ) {
                alert("Preencha todos os campos!");
                return;
            }


            const atividade = {
                titulo: titulo,
                disciplina: disciplina,
                descricao: descricao,
                dataEntrega: dataEntrega,
                status: "pendente"
            };


            // Recupera atividades existentes
            let atividades =
                JSON.parse(
                    localStorage.getItem("atividades")
                ) || [];


            // Adiciona nova atividade
            atividades.push(atividade);


            // Salva no navegador
            localStorage.setItem(
                "atividades",
                JSON.stringify(atividades)
            );


            alert("Atividade criada com sucesso!");

            window.location.href = "professor.html";
        }
    );
}