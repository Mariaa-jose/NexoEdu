// ===============================
// CADASTRO - NEXOEDU
// ===============================

const formularioCadastro =
    document.querySelector("#formCadastro");

if (formularioCadastro) {

    formularioCadastro.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome =
            document.querySelector("#nome").value;

        const email =
            document.querySelector("#email").value;

        const senha =
            document.querySelector("#senha").value;

        const confirmarSenha =
            document.querySelector("#confirmarSenha").value;

        if (
            nome === "" ||
            email === "" ||
            senha === "" ||
            confirmarSenha === ""
        ) {
            alert("Preencha todos os campos!");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não são iguais.");
            return;
        }

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        localStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );

        alert("Conta criada com sucesso!");

        window.location.href = "login.html";
    });
}