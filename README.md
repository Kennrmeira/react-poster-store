# 🎬 RockPosters - Loja de Pôsteres de Filmes e Séries

Aplicação desenvolvida com **React + Vite** que simula uma loja virtual de pôsteres decorativos de filmes e séries.

O projeto foi criado com foco em praticar conceitos fundamentais do ecossistema React, como componentização, roteamento entre páginas, consumo de APIs REST e renderização dinâmica de dados.

Os produtos são obtidos através de uma **MockAPI**, permitindo que a aplicação carregue os pôsteres dinamicamente, simulando o funcionamento de uma aplicação real.

---

## 🚀 Tecnologias utilizadas

- React
- Vite
- JavaScript (ES6+)
- React Router DOM
- Fetch API
- MockAPI
- HTML5
- CSS3

---

## 📂 Estrutura do projeto

```text
src
│
├── assets
│   └── imagens
│
├── components
│   ├── Card.jsx
│   ├── Navbar.jsx
│   └── OptionsInicial.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Filmes.jsx
│   └── Series.jsx
│
├── services
│   └── api.js
│
├── App.jsx
└── main.jsx
```

---

## 🖥️ Funcionalidades

- Página inicial com apresentação da loja
- Navegação entre páginas utilizando React Router
- Catálogo de pôsteres de Filmes
- Catálogo de pôsteres de Séries
- Componentes reutilizáveis
- Consumo de dados através de uma API REST (MockAPI)
- Carregamento dinâmico dos produtos
- Organização em componentes, páginas e serviços

---

## 🌐 Integração com API

Os dados dos produtos são carregados dinamicamente através de uma MockAPI utilizando a Fetch API.

Cada produto contém informações como:

- título
- descrição
- imagem
- categoria
- preço

A aplicação realiza uma requisição HTTP para obter os produtos e renderizá-los automaticamente na interface.

---

## 📚 Conceitos praticados

- Componentização
- Props
- React Hooks (`useState` e `useEffect`)
- React Router DOM
- Fetch API
- Consumo de APIs REST
- Renderização dinâmica com `map()`
- Organização de projeto React
- Estrutura de aplicações SPA

---

## 🚀 Melhorias futuras

- Sistema de busca por produtos
- Filtro por categoria
- Página de detalhes do produto
- Carrinho de compras
- Responsividade
- Estilização utilizando CSS Modules ou Styled Components
- Integração com backend próprio

---

## 👨‍💻 Autor

**Kenai Richard Meira**

Projeto desenvolvido para fins de estudo e fortalecimento do portfólio em desenvolvimento Front-end utilizando React.
