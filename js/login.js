// ===============================
// LOGIN - NEXOEDU
// ===============================

const formularioLogin = document.querySelector("#formLogin");

if (formularioLogin) {

    formularioLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.querySelector("#email").value;
        const senha = document.querySelector("#senha").value;

        if (email === "" || senha === "") {
            alert("Preencha todos os campos!");
            return;
        }

        // Verifica se existe usuário cadastrado
        const usuarioSalvo = JSON.parse(
            localStorage.getItem("usuario")
        );

        if (
            usuarioSalvo &&
            usuarioSalvo.email === email &&
            usuarioSalvo.senha === senha
        ) {
            localStorage.setItem("usuarioLogado", "true");

            alert("Login realizado com sucesso!");

            window.location.href = "aluno.html";
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });
}