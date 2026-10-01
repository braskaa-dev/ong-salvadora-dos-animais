export const templates = {
    inicio: `
        <section>
            <h2>Sobre a ONG</h2>
            <img src="../imagens/onganimais.webp" alt="dados para contato com a ONG" width="500">
            <p>
                A <strong>ONG Salvadora dos Animais</strong> atua em resgate, cuidados e adoção dos animais em situação de vulnerabilidade.
            </p>
        </section>

        <section>
            <h2>Nossa missão</h2>
            <p>
                Resgatar animais, oferecer os cuidados necessários e incentivar a adoção responsável.
            </p>
        </section>

        <section>
            <h2>Entre em contato</h2>
            <p><strong>Telefone:</strong> (12) 34567-8910</p>
            <p><strong>E-mail:</strong> ongsalvadoradeanimais@ong.com.br</p>
            <p><strong>Endereço:</strong> Rua Ong</p>
        </section>
    `,

    projetos: `
        <section id="resgate">
            <h2>Resgate de animais</h2>
            <p>
                Realizamos o resgate de animais abandonados ou em situação de vulnerabilidade, oferecendo cuidados e proteção.
            </p>
        </section>

        <section id="adocao">
            <h2>Campanha de adoção</h2>
            <p>
                Incentivamos a adoção responsável de animais resgatados, buscando encontrar um novo lar seguro e acolhedor para cada um deles.
            </p>
        </section>

        <section>
            <h2>Cuidados e recuperação</h2>
            <p>
                Oferecemos cuidados aos animais resgatados, incluindo alimentação, higiene e acompanhamento durante o período de recuperação.
            </p>
        </section>

        <section>
            <h2>Como fazer uma doação</h2>
            <p>
                Sua contribuição ajuda a ONG a oferecer alimentação,
                medicamentos, atendimento veterinário e outros
                cuidados necessários aos animais resgatados.
            </p>

            <h3>Doação em dinheiro</h3>
            <p>
                Você pode contribuir com qualquer valor para apoiar
                diretamente as despesas da ONG.
            </p>

            <h3>Doação de alimentos e materiais</h3>
            <p>
                Também recebemos doações de ração, produtos de higiene,
                medicamentos e outros materiais utilizados nos cuidados
                dos animais.
            </p>
        </section>

        <section>
            <h2>Seja um voluntário</h2>
            <p>
                Pessoas interessadas podem colaborar com atividades
                de cuidado, organização, divulgação e apoio às ações
                da ONG.
            </p>

            <h3>Como participar</h3>
            <p>
                Para demonstrar interesse em participar como voluntário,
                acesse nossa página de cadastro e preencha seus dados.
            </p>

            <a href="?pagina=cadastro" data-route="cadastro">
                Quero ser voluntário
            </a>
        </section>

        <section>
            <h2>Componentes de feedback</h2>

            <h3>Badges</h3>

            <p>
                Projeto ativo:
                <span class="badge">Ativo</span>
            </p>

            <p>
                Voluntariado:
                <span class="badge">Voluntários</span>
            </p>

            <div class="alerta" role="alert">
                <strong>Atenção:</strong>
                As vagas para voluntários são limitadas. Faça seu cadastro para participar das próximas ações.
            </div>

            <div class="toast" role="status" aria-live="polite">
                <strong>Cadastro realizado!</strong>
                Seus dados foram recebidos pela ONG.
            </div>

            <div class="modal">
                <h3>Informação sobre os projetos</h3>
                <p>
                    Os projetos da ONG são desenvolvidos para promover o resgate,
                    a recuperação e a adoção responsável dos animais.
                </p>
                <p>
                    Entre em contato para saber como participar.
                </p>
            </div>
        </section>
    `,

    cadastro: `
        <section>
            <h2>Cadastro de voluntários</h2>

            <form action="#" method="post">
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <div>
                        <label for="nome">Nome completo:</label>
                        <input type="text" id="nome" name="nome"
                        placeholder="Nome Completo" required>
                    </div>

                    <div>
                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf"
                        placeholder="000.000.000-00"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        required>
                    </div>

                    <div>
                        <label for="nascimento">Data de nascimento:</label>
                        <input type="date" id="nascimento" name="nascimento" required>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Contato</legend>

                    <div>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                    </div>

                    <div>
                        <label for="telefone">Telefone:</label>
                        <input type="tel" id="telefone" name="telefone"
                        placeholder="(00) 00000-0000"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        required>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <div>
                        <label for="cep">CEP:</label>
                        <input type="text" id="cep" name="cep"
                        placeholder="00000-000"
                        pattern="[0-9]{5}-[0-9]{3}"
                        required>
                    </div>

                    <div>
                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" required>
                    </div>

                    <div>
                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" required>
                    </div>

                    <div>
                        <label for="estado">Estado:</label>
                        <input type="text" id="estado" name="estado" required>
                    </div>
                </fieldset>

                <input type="submit" value="Enviar">
            </form>
        </section>
    `
};