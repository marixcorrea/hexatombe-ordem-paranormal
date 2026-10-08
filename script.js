function abrirArquivo() {

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent =
        "ACESSO CONCEDIDO... REGISTRO ENCONTRADO.";

    document
        .getElementById("arquivo")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}
