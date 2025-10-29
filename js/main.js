document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  async function carregarPagina(pagina) {
    main.innerHTML = templates[pagina];

    if (pagina === "cadastro") {
      inicializarValidacao();
      bloquearDataFutura();
      preencherFormulario();
    }
  }

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pagina = link.getAttribute("data-page");
      carregarPagina(pagina);
    });
  });

  carregarPagina("inicio");
});

function inicializarValidacao() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const alerts = form.querySelectorAll(".alerta");
    alerts.forEach(alert => alert.remove());

    const campos = form.querySelectorAll("input, select");
    campos.forEach(campo => {
      campo.style.borderColor = "";
      if (!campo.checkValidity()) {
        valid = false;
        campo.style.borderColor = "var(--cor-erro)";
        const msg = document.createElement("div");
        msg.className = "alerta";
        msg.textContent = campo.title || "Preenchimento incorreto";
        campo.parentNode.insertBefore(msg, campo.nextSibling);
      }
    });

    if (valid) {
  const msgSucesso = document.createElement("div");
  msgSucesso.className = "alerta sucesso";
  msgSucesso.textContent = "Formulário enviado com sucesso! 🐾";
  
  form.appendChild(msgSucesso);

  setTimeout(() => {
    msgSucesso.remove();
  }, 3000);

  const dados = {};
  campos.forEach(campo => {
    dados[campo.id] = campo.value;
  });
  localStorage.setItem("cadastro", JSON.stringify(dados));

  form.reset();
}

  });
}

function bloquearDataFutura() {
  const inputData = document.getElementById("nascimento");
  if (!inputData) return;
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const ano = hoje.getFullYear();
  inputData.max = `${ano}-${mes}-${dia}`;
}
document.addEventListener("DOMContentLoaded", () => {
  const btnDarkMode = document.getElementById("btnDarkMode");
  const btnContraste = document.getElementById("btnContraste");

  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo) {
    document.body.classList.add(temaSalvo);
    atualizarEstadoBotoes(temaSalvo);
  }

  if (btnDarkMode) {
    btnDarkMode.addEventListener("click", () => {
      const ativo = document.body.classList.contains("modo-escuro");
      document.body.classList.toggle("modo-escuro", !ativo);
      document.body.classList.remove("alto-contraste");
      localStorage.setItem("tema", ativo ? "" : "modo-escuro");
      atualizarEstadoBotoes(ativo ? "" : "modo-escuro");
    });
  }

  if (btnContraste) {
    btnContraste.addEventListener("click", () => {
      const ativo = document.body.classList.contains("alto-contraste");
      document.body.classList.toggle("alto-contraste", !ativo);
      document.body.classList.remove("modo-escuro");
      localStorage.setItem("tema", ativo ? "" : "alto-contraste");
      atualizarEstadoBotoes(ativo ? "" : "alto-contraste");
    });
  }

  function atualizarEstadoBotoes(temaAtivo) {
    [btnDarkMode, btnContraste].forEach(btn => btn && btn.setAttribute("aria-pressed", "false"));
    if (temaAtivo === "modo-escuro" && btnDarkMode) btnDarkMode.setAttribute("aria-pressed", "true");
    if (temaAtivo === "alto-contraste" && btnContraste) btnContraste.setAttribute("aria-pressed", "true");
  }
});
