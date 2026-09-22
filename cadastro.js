const form = document.getElementById('cadastro-form');
const caixaErro = document.getElementById('erro-cadastro');

function mostrarErro(mensagem) {
    caixaErro.textContent = mensagem;
    caixaErro.classList.add('visible');
}

function limparErro() {
    caixaErro.textContent = '';
    caixaErro.classList.remove('visible');
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    limparErro();

    const nomeVal = document.getElementById('nome').value.trim();
    const emailVal = document.getElementById('email').value.trim();
    const senhaVal = document.getElementById('senha').value.trim();
    const jogoFavoritoVal = document.getElementById('jogo_favorito').value.trim();

    const erros = [];

    if (nomeVal === '') {
        erros.push("O campo 'Nome Completo' é obrigatório.");
    } else if (nomeVal.length < 2 || !/^[A-Za-zÀ-ÿ\s'-]+$/.test(nomeVal)) {
        erros.push("O nome deve conter apenas letras e ter pelo menos 2 caracteres.");
    }

    if (emailVal === '') {
        erros.push("O campo 'E-mail' é obrigatório.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        erros.push("Digite um e-mail válido, por exemplo: nome@dominio.com.");
    }

    if (senhaVal === '') {
        erros.push("O campo 'Senha' é obrigatório.");
    } else if (senhaVal.length < 8) {
        erros.push("A senha deve ter no mínimo 8 caracteres.");
    } else if (!/[A-Z]/.test(senhaVal) || !/[a-z]/.test(senhaVal) || !/[0-9]/.test(senhaVal)) {
        erros.push("A senha deve conter letras maiúsculas, minúsculas e números.");
    }

    if (jogoFavoritoVal === '') {
        erros.push("O campo 'Jogo Favorito' é obrigatório.");
    } else if (jogoFavoritoVal.length < 2) {
        erros.push("O nome do jogo deve ter pelo menos 2 caracteres.");
    }

    if (erros.length > 0) {
        mostrarErro(erros.join(' '));
        return;
    }

    alert('Cadastro realizado com sucesso!');
    this.reset();
});
