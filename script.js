  // Função para exibir uma mensagem de boas-vindas
  function mostrarMensagem() {
    var mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Bem-vindo à nossa página de serviços!";
}

// Função para mostrar/esconder a descrição dos serviços
function toggleDescricao(id) {
    var descricao = document.getElementById(id);
    if (descricao.style.display === "none") {
        descricao.style.display = "block";
    } else {
        descricao.style.display = "none";
    }
}