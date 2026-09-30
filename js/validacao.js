export function validarCampo(campo) {
    const mensagemExistente =
        campo.parentElement.querySelector(".mensagem-erro");

    if (mensagemExistente) {
        mensagemExistente.remove();
    }

    campo.classList.remove("campo-valido", "campo-invalido");

    if (campo.checkValidity()) {
        campo.classList.add("campo-valido");
        return true;
    }

    campo.classList.add("campo-invalido");

    const mensagem = document.createElement("span");
    mensagem.className = "mensagem-erro";

    if (campo.validity.valueMissing) {
        mensagem.textContent = "Este campo é obrigatório.";
    } else if (campo.validity.typeMismatch) {
        mensagem.textContent = "Digite um formato válido.";
    } else if (campo.validity.patternMismatch) {
        mensagem.textContent = "O formato informado é inválido.";
    } else {
        mensagem.textContent = "Verifique o valor informado.";
    }

    campo.parentElement.appendChild(mensagem);

    return false;
}

export function validarFormulario(formulario) {
    const campos = formulario.querySelectorAll(
        "input:not([type='submit'])"
    );

    let formularioValido = true;

    campos.forEach((campo) => {
        if (!validarCampo(campo)) {
            formularioValido = false;
        }
    });

    return formularioValido;
}