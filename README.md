# Sistema Verdes Mares: Frontend Coding Test

![Desktop](technews.jpg)

## Apresentação
Olá e bem-vindo à minha resolução do teste prático para vaga de Frontend Developer. Neste teste tentei demonstrar minhas habilidades e criatividade na construção de uma aplicação web de leitura de notícias.

Tive algumas dificuldades com alguns objetivos, infelizmente não consegui completar um ou outro, mas é sempre importante nós sabermos nossos próprios limites para que possamos lutar para crescer e melhorar nossas próprias habilidades e alcançar novos limites.

Agradeço desde já a oportunidade de participar deste processo seletivo, pois aprendi muito durante o desenvolvimento desta aplicação.

## Objetivo
O objetivo era desenvolver uma aplicação frontend que exibisse as últimas notícias sobre tecnologia em `ordem da publicação`. Além disso, deveria incluir um `sistema de busca` para que os usuários encontrassem o artigo baseado no title e author do seu interesse.

## Como rodar o projeto
Para rodar o projeto basta dar um git clone e, ao abrir o projeto no seu computador, abra o terminal da sua IDE e digite "git checkout master". Dessa forma, você estará na branch correta do projeto. Com isso, agora você pode digitar "npm i". Depois que a instalação for concluida, digite "npm run dev" e o projeto deverá ser iniciado corretamente.

## Tecnologias Utilizadas
As tecnologias que eu utilizei para desenvolver esta aplicação foram: React.JS, CSS(CSS Modules), HTML, Vite, GIT, Material-UI, Axios, date-fns e sonner(Toast).

## Requisitos
### Requisitos Funcinais
- [x] Deve ser possível listar as notícias mais recentes em ordem cronológica;
- [x] Deve ser possível listar as notícias com `thumbnail`, `heading`, `description`, `author`, `image`, `category` e `source`;
- [ ] Deve ser possível acessar a notícia pelo `slug`;
- [x] Deve ser possível o usuário buscar notícias desejada pelo `heading`;
- [x] Deve ser possível o usuário buscar notícia por `author`;
- [x] Deve ser possível o usuário ler uma notícia;
- [x] Deve ser possível salvar um `id` da notíca lida;
      
### Regras de negócio
- [x] O usuário não pode ler mais que 2 vezes a mesma notícia;
- [x] O usuário não pode ler uma notícia com o JavaScript desabilitado;
- [ ] O usuário não pode ler uma notícia em modo anônimo;
- [x] O usuário não poderá acessar uma página de categoria;
- [x] O usuário não poderá acessar uma página de author;
- [x] O usuário deverá ser redirecionado para página principal quando tentar acessar a página de categoria;
      
### Requisitos não-funcionais
- [ ] Dynamic Routes: o `slug` da notícida deve ser: `/[category]/[heading]-[id]`
- [x] O `id` da notícia lida precisam estar persistidos em `localStorage`;
- [x] O `id` da notícia persistida em `localStorage`, deve ser retornado quando passado o nome da chave `articles_read`;
- [x] A lista de notícias deve estar paginadas com 20 itens por página;
- [x] A lista de notícias deve exibir as últimas notícias em ordem cronológica;
- [ ] O usuário com JavaScript desabilitado no Browser deverá ser direcionado para page-block;
- [ ] O usuário em aba anônimo no Browser deverá ser direcionado para page-block;
- [x] O usuário com mais de 10 leituras diferentes deverá ser direcionado para page-block;