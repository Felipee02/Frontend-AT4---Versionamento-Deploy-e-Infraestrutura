const templates = {
  inicio: `
    <section aria-label="sobre">
      <h2>Quem somos</h2>
      <p>Somos uma organização sem fins lucrativos dedicada ao resgate e cuidado de animais abandonados.<br> Nosso trabalho é movido pelo amor e pela empatia, oferecendo abrigo, alimentação e novas chances para cães e gatos.</p>
      <figure>
        <img src="assets/img/cachorro1.png" alt="Voluntário cuidando de um cachorro dourado">
        <figcaption>Trabalhamos com amor e dedicação ao bem-estar animal.</figcaption>
      </figure>
    </section>

    <section aria-label="missao">
      <h2>Nossa missão</h2>
      <p>Promover o bem-estar animal por meio do resgate, tratamento e adoção responsável. Trabalhamos para conscientizar a sociedade sobre o valor da vida animal e construir um futuro mais justo.</p>
    </section>

    <section aria-label="contato">
      <h2>Contato</h2>
      <address>
        <p><strong>Endereço:</strong> Rua das Flores, 123 – Bairro Jardim São Paulo – São Paulo/SP</p>
        <p><strong>Telefone:</strong> (11) 2012-0106</p>
        <p><strong>E-mail:</strong> <a href="mailto:contato.ongamigosfieis@gmail.com">contato.ongamigosfieis@gmail.com</a></p>
      </address>
    </section>
  `,

  projetos: `
    <section aria-label="projetos">
      <h2>Nossos Projetos</h2>
      <p>Conheça algumas das ações que realizamos para transformar a vida de animais em situação de abandono.</p>
      <div class="grid-12">
        <article class="col-6">
          <h2>Projeto Adoção com Amor</h2>
          <p>Este projeto conecta animais resgatados a famílias amorosas e responsáveis.</p>
          <img src="assets/img/cachorro2.png" alt="Cão adotado com coleira vermelha sendo acariciado">
        </article>
        <article class="col-6">
          <h2>Projeto Resgate e Reabilitação</h2>
          <p>Equipe especializada realiza resgates de animais feridos e promove tratamento veterinário completo.</p>
          <img src="assets/img/cachorro3.png" alt="Voluntário cuidando de um cachorro resgatado">
        </article>
      </div>
    </section>
  `,

  cadastro: `
    <section aria-label="cadastro">
      <h2>Cadastro de Participante</h2>
      <p>Preencha o formulário abaixo para se cadastrar como voluntário, doador ou apoiador da ONG Amigos Fiéis.</p>
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label for="nome">Nome completo:</label>
          <input type="text" id="nome" name="nome" required title="Digite seu nome completo">
          
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required title="Digite um e-mail válido">
          
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" title="Digite o CPF no formato 000.000.000-00">
          
          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required pattern="(\\(?\\d{2}\\)?\\s?)?\\d{4,5}-?\\d{4}" title="Formato esperado: (11) 91234-5678 ou 11912345678">
          
          <label for="nascimento">Data de nascimento:</label>
          <input type="date" id="nascimento" name="nascimento" required>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required>
          
          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" required pattern="\\d{5}-?\\d{3}" title="Formato esperado: 00000-000">
          
          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" required>
          
          <label for="estado">Estado:</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="MG">MG</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Interesse</legend>
          <label for="perfil">Quero me cadastrar como:</label>
          <select id="perfil" name="perfil" required>
            <option value="">Selecione</option>
            <option value="voluntario">Voluntário</option>
            <option value="doador">Doador</option>
            <option value="apoiador">Apoiador</option>
          </select>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
      </form>
    </section>
  `
};