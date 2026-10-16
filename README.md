# Portfólio

Portfólio pessoal desenvolvido com **React**, **TypeScript**, **Vite** e **Tailwind CSS**, com o objetivo de apresentar a trajetória profissional, habilidades e projetos em uma interface responsiva.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

## Requisitos

- Node.js e npm instalados
- Git para versionamento (opcional, mas recomendado)

## Instalação e execução

Clone o repositório e entre na pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd Portifolio
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir a aplicação no navegador.

Para validar a compilação e a checagem de tipos do TypeScript, execute:

```bash
npm run build
```

## Estrutura do projeto

```text
src/
├── components/
│   ├── project/
│   │   ├── Gallery.tsx
│   │   ├── Process.tsx
│   │   ├── ProjectSection.tsx
│   │   ├── ProjectSubnav.tsx
│   │   ├── Results.tsx
│   │   └── Team.tsx
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   └── ProjectCard.tsx
├── data/
│   ├── helpers.ts
│   ├── profile.ts
│   └── projects.ts
├── pages/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── ProjectDetail.tsx
│   └── Projects.tsx
├── types/
│   └── project.ts
├── App.tsx
├── index.css
└── main.tsx
```

A estrutura acima representa a organização planejada ao longo das fases de desenvolvimento; os nomes dos arquivos podem variar conforme a implementação atual.

## Funcionalidades planejadas

- **Home:** apresentação, habilidades, trajetória e projetos em destaque.
- **Sobre mim:** biografia, tecnologias, formação e experiência.
- **Projetos:** listagem de projetos com filtro por tecnologia.
- **Detalhes do projeto:** links personalizados, galeria de imagens, equipe, processo de desenvolvimento e resultados.
- **Contato:** acesso ao e-mail, LinkedIn e GitHub.
- **Navegação:** rotas com React Router DOM e layout compartilhado.
- **Interface:** tema escuro, responsividade e componentes estilizados com Tailwind CSS.

## Dados e personalização

Os dados de perfil e projetos ficam separados dos componentes de interface:

- `src/data/profile.ts`: informações pessoais, habilidades, trajetória, formação e experiência.
- `src/data/projects.ts`: lista de projetos.
- `src/data/helpers.ts`: funções para consultar projetos, destaques e tecnologias.
- `src/types/project.ts`: interfaces TypeScript usadas para tipar os dados.

Substitua os dados de exemplo pelos seus dados reais e atualize os links, tecnologias e imagens dos projetos.

As imagens podem ser organizadas em `public/images/<slug-do-projeto>/`. Para referenciá-las, use caminhos como `/images/<slug-do-projeto>/capa.png`.

## Fluxo de versionamento

O projeto utiliza Git com uma branch por fase ou funcionalidade. Exemplo:

```bash
git switch main
git pull
git switch -c feat/nome-da-funcionalidade
```

Após implementar e testar as alterações:

```bash
git add .
git commit -m "feat: descreve a alteração"
git push -u origin feat/nome-da-funcionalidade
```

Em seguida, abra um Pull Request, revise as mudanças e faça o merge na `main`.

### Prefixos sugeridos para commits

- `feat:` nova funcionalidade
- `fix:` correção de erro
- `style:` ajustes visuais ou de formatação
- `refactor:` reorganização sem alteração de comportamento
- `docs:` documentação
- `chore:` configuração e dependências

## Roadmap

- [x] Fase 0 — Configuração inicial do Vite, React, TypeScript e Tailwind CSS
- [x] Fase 1 — Layout base, navbar e rotas
- [x] Fase 2 — Tipos, dados e helpers dos projetos
- [x] Fase 3 — Páginas principais
- [x] Fase 4 — Página individual do projeto
- [ ] Fase 5 — Responsividade, acessibilidade, animações e SEO
- [ ] Fase 6 — Publicação (deploy) na Vercel ou Netlify

> As marcações indicam as fases descritas no planejamento. Atualize-as conforme o estado real do repositório.

## Deploy

A aplicação pode ser publicada na [Vercel](https://vercel.com/) ou na [Netlify](https://www.netlify.com/).

Como o projeto usa rotas no cliente com React Router DOM, confirme a configuração de fallback para `index.html` na plataforma escolhida.

## Licença

Nenhuma licença foi especificada até o momento.
