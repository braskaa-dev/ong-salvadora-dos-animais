import {
    renderizar,
    navegar,
    obterPaginaAtual
} from "./navegacao.js";

import {
    validarCampo,
    validarFormulario
} from "./validacao.js";

import {
    salvarCadastro,
    carregarCadastro
} from "./armazenamento.js";

const app = document.getElementById("app");

function restaurarCadastro() {
    const dados = carregarCadastro();

    if (!dados) {
        return;
    }

    const formulario = document.querySelector("form");

    if (!formulario) {
        return;
    }

    formulario.nome.value = dados.nome || "";
    formulario.cpf.value = dados.cpf || "";
    formulario.nascimento.value = dados.nascimento || "";
    formulario.email.value = dados.email || "";
    formulario.telefone.value = dados.telefone || "";
    formulario.cep.value = dados.cep || "";
    formulario.endereco.value = dados.endereco || "";
    formulario.cidade.value = dados.cidade || "";
    formulario.estado.value = dados.estado || "";
}

/* Navegação da SPA */
document.addEventListener("click", (evento) => {
    const link = evento.target.closest("[data-route]");

    if (!link) {
        return;
    }

    evento.preventDefault();

    navegar(app, link.dataset.route);

    if (link.dataset.route === "cadastro") {
        restaurarCadastro();
    }
});

/* Validação em tempo real */
document.addEventListener("input", (evento) => {
    const campo = evento.target;

    if (!campo.matches("input:not([type='submit'])")) {
        return;
    }

    validarCampo(campo);
});

/* Envio do formulário */
document.addEventListener("submit", (evento) => {
    const formulario = evento.target.closest("form");

    if (!formulario) {
        return;
    }

    evento.preventDefault();

    if (!validarFormulario(formulario)) {
        return;
    }

    salvarCadastro(formulario);

    Swal.fire({
        title: "Cadastro realizado!",
        text: "Seus dados foram salvos no navegador.",
        icon: "success",
        confirmButtonText: "OK"
    });
});

/* Botões voltar e avançar */
window.addEventListener("popstate", () => {
    const pagina = obterPaginaAtual();

    renderizar(app, pagina);

    if (pagina === "cadastro") {
        restaurarCadastro();
    }
});

/* Carregamento inicial */
const paginaInicial = obterPaginaAtual();

renderizar(app, paginaInicial);

if (paginaInicial === "cadastro") {
    restaurarCadastro();
}