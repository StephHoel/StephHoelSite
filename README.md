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
├── (no index.html - Next.js uses `pages/`) 
├── package.json           # Configurações do projeto e dependências
├── postcss.config.cjs     # Configuração do PostCSS (CommonJS)
├── tailwind.config.cjs    # Configuração do TailwindCSS
├── tsconfig.json          # Configuração do TypeScript
├── tsconfig.app.json      # Configuração específica para o app
├── tsconfig.node.json     # Configuração específica para o Node.js
└── (Vite removed)         # Project migrated to Next.js
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

Publicação no GH Pages pode ser feita via pipeline CI ou export estático dependendo do fluxo desejado. Este repositório está preparado para rodar em Next.js (server or static export).

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

O projeto utiliza TailwindCSS para estilização. As fontes personalizadas e mapeamento de classes estão configurados em `tailwind.config.cjs`. A configuração do PostCSS está em `postcss.config.cjs`.

Observação: TypeScript incremental builds foram desativadas (`incremental: false`) para evitar a criação do arquivo `tsconfig.tsbuildinfo` no repositório.

---
Desenvolvido por **Steph Hoel**.
