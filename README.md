# Steph Hoel Portfolio Website

Este é o código-fonte do site de portfólio online de Steph Hoel, desenvolvido com React, TypeScript, Vite e TailwindCSS.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida para desenvolvimento web.
- **TailwindCSS**: Framework CSS utilitário para estilização.
- **React Router**: Gerenciamento de rotas no React.
- **gh-pages**: Publicação do site no GitHub Pages.

## 📂 Estrutura do Projeto

```
StephHoelSite/
├── public/                # Arquivos públicos (favicon, etc.)
├── src/                   # Código-fonte do projeto
│   ├── components/        # Componentes reutilizáveis
│   ├── lib/               # Configurações e lógica de rotas
│   ├── pages/             # Páginas do site
│   ├── index.css          # Estilos globais
│   ├── main.tsx           # Arquivo principal do React
│   └── vite-env.d.ts      # Tipos do Vite
├── .gitignore             # Arquivos ignorados pelo Git
├── index.html             # Arquivo HTML principal
├── package.json           # Configurações do projeto e dependências
├── postcss.config.js      # Configuração do PostCSS
├── tailwind.config.js     # Configuração do TailwindCSS
├── tsconfig.json          # Configuração do TypeScript
├── tsconfig.app.json      # Configuração específica para o app
├── tsconfig.node.json     # Configuração específica para o Node.js
└── vite.config.ts         # Configuração do Vite
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm (gerenciador de pacotes)

### Passos

1. **Clone o repositório**:
   ```sh
   git clone https://github.com/stephhoel/StephHoelSite.git
   cd StephHoelSite
   ```

2. **Instale as dependências**:
   ```sh
   npm install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```sh
   npm run dev
   ```

4. **Acesse o site**:
   Abra o navegador e acesse [http://localhost:5173](http://localhost:5173).

### Build para Produção

Para gerar os arquivos otimizados para produção, execute:
```sh
npm run build
```

Os arquivos serão gerados na pasta `build/`.

### Publicação no GitHub Pages

Para publicar o site no GitHub Pages, execute:
```sh
npm run deploy
```

## 🌐 Estrutura de Rotas

As rotas do site são configuradas no arquivo [`src/lib/routes.ts`](src/lib/routes.ts). Aqui estão as rotas disponíveis:

- `/` - Página inicial
- `/ficha` - Página de Ficha
- `/cadastro` - Página de Cadastro
- `/contato` - Página de Contato
- `/login` - Página de Login
- `/membros` - Página de Membros
- `/sobre` - Página Sobre

## 🖌️ Estilização

O projeto utiliza TailwindCSS para estilização. As fontes personalizadas são configuradas no arquivo [`tailwind.config.js`](tailwind.config.js).

---
Desenvolvido por **Steph Hoel**.
