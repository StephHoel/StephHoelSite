# Steph Hoel Portfolio Website

Este é o código-fonte do site de portfólio online de Steph Hoel, agora migrado para Next.js com React, TypeScript e TailwindCSS.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Next.js**: Framework React com renderização híbrida e roteamento por arquivos.
- **TailwindCSS**: Framework CSS utilitário para estilização.
- **gh-pages**: Publicação do site no GitHub Pages.

## 📂 Estrutura do Projeto

```plain
StephHoelSite/
├── public/                # Arquivos públicos (favicon, etc.)
├── src/                   # Código-fonte do projeto
│   ├── components/        # Componentes reutilizáveis
│   ├── lib/               # Configurações e utilitários
│   ├── pages/             # Páginas do site (Next.js)
│   ├── index.css          # Estilos globais
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
   Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

### Build para Produção

Para gerar os arquivos otimizados para produção, execute:

```sh
npm run build
```

Em seguida inicie com `npm start`.

### Publicação no GitHub Pages

Publicação no GH Pages é feita atrás de uma pipeline CI configurada a cada push ou pull request.

## 🌐 Estrutura de Rotas

As rotas do site agora são baseadas em arquivos dentro da pasta `pages/`. Aqui estão as rotas disponíveis:

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
