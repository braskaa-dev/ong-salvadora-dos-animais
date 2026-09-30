export function salvarCadastro(formulario) {
    const dados = {
        nome: formulario.nome.value,
        cpf: formulario.cpf.value,
        nascimento: formulario.nascimento.value,
        email: formulario.email.value,
        telefone: formulario.telefone.value,
        cep: formulario.cep.value,
        endereco: formulario.endereco.value,
        cidade: formulario.cidade.value,
        estado: formulario.estado.value
    };

    localStorage.setItem("cadastroONG", JSON.stringify(dados));

    return dados;
}

export function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastroONG");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}