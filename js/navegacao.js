import { templates } from "./templates.js";

export function renderizar(app, pagina) {
    app.innerHTML = templates[pagina] || templates.inicio;
}

export function navegar(app, pagina) {
    history.pushState({ pagina }, "", `?pagina=${pagina}`);
    renderizar(app, pagina);
}

export function obterPaginaAtual() {
    const parametros = new URLSearchParams(window.location.search);

    return parametros.get("pagina") || "inicio";
}