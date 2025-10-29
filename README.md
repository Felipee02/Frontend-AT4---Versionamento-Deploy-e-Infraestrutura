# ONG Amigos Fiéis - Projeto Web

## Descrição do Projeto
O projeto **ONG Amigos Fiéis** é uma aplicação web desenvolvida para simular o site de uma organização dedicada ao resgate, cuidado e adoção de animais abandonados. O objetivo é oferecer informações sobre a ONG, apresentar projetos sociais, permitir cadastro de voluntários, doadores e apoiadores, e garantir uma experiência acessível e interativa para todos os usuários.

Este projeto integra **HTML5, CSS3 e JavaScript**, implementando boas práticas de **design responsivo, acessibilidade e versionamento**, simulando um ambiente profissional de desenvolvimento web.

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível do conteúdo.  
- **CSS3**: Design system com variáveis, grid 12 colunas, Flexbox, responsividade e modos de contraste.  
- **JavaScript**: SPA com templates, manipulação do DOM, validação de formulários, armazenamento local e modos escuro/alto contraste.  
- **Git/GitHub**: Controle de versão, branching GitFlow, commits semânticos e gerenciamento de releases.

---

## Funcionalidades

1. **Single Page Application (SPA)**:
   - Navegação entre "Início", "Projetos" e "Cadastro" sem recarregar a página.
   - Conteúdo carregado dinamicamente via templates em JavaScript.

2. **Formulário de Cadastro**:
   - Campos de dados pessoais, endereço e interesse (voluntário, doador, apoiador).
   - Validação em tempo real com mensagens visuais de erro.
   - Salvamento automático dos dados no `localStorage`.

3. **Design Responsivo**:
   - Layout baseado em grid 12 colunas e Flexbox.
   - Breakpoints para diferentes tamanhos de tela.
   - Sistema de espaçamento modular (8px, 16px, 24px, 32px, 48px, 64px).

4. **Componentes Interativos**:
   - Botões com estados `hover`, `active` e `disabled`.
   - Cards responsivos para os projetos.
   - Alertas visuais e mensagens de sucesso.

5. **Acessibilidade (WCAG 2.1 Nível AA)**:
   - Navegação por teclado.
   - Contraste mínimo de 4.5:1 no texto.
   - Suporte para leitores de tela.
   - Modos **Escuro** e **Alto Contraste**, alternáveis pelo usuário.

6. **Otimização**:
   - CSS, HTML e JavaScript preparados para minificação.
   - Imagens otimizadas para web.

---

## Estrutura do Projeto

├── assets/
│ └── img/ # Imagens do site
├── css/
│ ├── style.css # Estilos gerais
│ └── componentes.css # Componentes e ajustes
├── js/
│ ├── main.js # SPA, validação e interações
│ └── templates.js # Templates HTML para cada seção
├── index.html # Página inicial
└── README.md # Documentação do projeto
