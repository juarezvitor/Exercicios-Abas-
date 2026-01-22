# 📑 Componente de Abas (Tabs) — HTML, CSS e JavaScript

Este projeto foi desenvolvido como exercício prático para fixar conceitos fundamentais de **manipulação do DOM** e **tratamento de eventos** utilizando **JavaScript puro**, sem frameworks.

O componente simula um sistema de abas (tabs), onde o conteúdo exibido muda conforme a interação do usuário, sem recarregar a página.

---

## 🎯 Objetivo do Projeto

- Praticar a seleção de elementos com `querySelector` e `querySelectorAll`
- Trabalhar com eventos de clique (`addEventListener`)
- Manipular classes CSS para controlar estados visuais
- Entender a comunicação entre elementos usando atributos `data-*`
- Criar uma interface interativa simples e funcional

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura da aplicação  
- **CSS3** — Estilização e controle de visibilidade  
- **JavaScript (Vanilla)** — Lógica de interação e manipulação do DOM  

---

## ⚙️ Como Funciona

- Todas as abas e conteúdos já existem no HTML
- Cada aba possui um atributo `data-tab`
- Cada conteúdo possui um atributo `data-content`
- Ao clicar em uma aba:
  - A classe `active` é removida de todas as abas e conteúdos
  - A classe `active` é adicionada apenas à aba clicada e ao conteúdo correspondente
- O CSS controla quais conteúdos são exibidos ou ocultados

---

## 📌 Funcionalidades

- Primeira aba ativa por padrão
- Troca de conteúdo sem recarregar a página
- Controle de estado visual usando classes CSS
- Código simples, limpo e escalável

---

## ▶️ Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git
