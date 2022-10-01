# Notas do Capítulo 5

O capítulo atual traz consigo ferramentas que dizem respeito sobre qualidade de software.
O conceito por trás da qualidade de software é garantir a entrega de um software previsível e testável, ela está baseada em manter a ordem e validar o código, de forma que o código responda de acordo com o que é solicitado.

Grande parte do papel da Q.A consiste em saber o que precisa ser feito e garantir que seja feito, para isso se utiliza de ferramentas como checklists, procedimentos padrão e documentação.

## Linting & Prettier : Padronizando o código de um jeito punk

Talvez você não saiba (ainda), mas quando se fala de desenvolvimento, os programadores passam mais tempo lendo código, do que escrevendo. E mais, do tempo em que se escreve código, a maior parte é refatoração.

Dito isso, imagine estar em um projeto, onde cada pessoa programa de um jeito diferente, pensa de um jeito diferente e traduz suas ideias de um jeito diferente. Apesar de serem pontos positivos para a criatividade, esses pontos trazem consigo um problema que é a _não padronização do código_. Nesse contexto, não seria difícil encontrar um código como esse:

```js
const express = require("express"); // feito por Henrique
const expressHandlebars = require("express-handlebars"); // feito por Fulano
import modulo from "./src/modulo"; // feito por Beltrano

const objeto = {
  propriedade1: "abc",
  propriedade2: "abc",
  propriedade3: "abc",
  propriedade4: "abc",
  propriedade5: "abc",
  propriedade6: "abc",
};
// feito por outra pessoa
const objeto2 = {
  propriedade1: "abc",
  propriedade2: "abc",
  propriedade3: "abc",
  propriedade4: "abc",
  propriedade5: "abc",
  propriedade6: "abc",
};
// feito por outra pessoa
```

Se você não enxerga problema nesse exemplo, é sinal que ainda não teve que ler muito código de outras pessoas, mas o resumo da opera é o seguinte, apesar de o código funcionar, ele está totalmente fora de padrão, e em um ramo onde passamos a maior parte do tempo dando manutenção, encontrar com um código como esse, prejudica na identificação do que realmente deveria importar, pois a cada linha que se passa torna-se mais difícil saber o que iremos encontrar pela frente.

Para solucionar esse problema, foram criados os linters.

> Um linter trata de questões como quantidade de espaçamentos, uso de aspas simples ou duplas, quebras de linhas etc. É quase como se tivéssemos um segundo par de olhos identificando o que normalmente deixamos passar.

No nosso projeto, utilizaremos o linter **_ESLint_** em conjunto com o **_Prettier_**, e caso você não saiba, o prettier, é uma forma de formatar o código de forma automática usando como base as configurações do linter adotado.

### Configurando o ESLint e o Prettier

Existem alguns passos a serem dados para configuração do ESLint e do Prettier para o projeto, os passos seguidos nesse repositório estão listados a seguir, mas você pode (e deve) analisar a [documentação do Prettier](https://prettier.io/docs/en/install.html) e a [documentação do ESLint](https://eslint.org/docs/latest/user-guide/getting-started) para adaptar essas configurações de acordo com as suas necessidades.

#### Passo-a-passo

1. Instale o Eslint e o eslint-config-prettier como dependência de desenvolvimento.

```shell
npm i -D eslint eslint-config-prettier eslint-plugin-prettier
```

2. Executar o comando `npm init @eslint/config`

```shell
npm init @eslint/config
```

3. No CLI do eslint, selecione as seguintes opções :

   1. > To check syntax, find problems, and enforce code style

   1. > CommonJS (require/exports)

   1. > None of these

   1. > No

   1. > Node

   1. > Use a popular style guide

   1. > Standard: https://github.com/standard/standard

   1. > JavaScript

   1. > Yes

   1. > npm

4. Edite o arquivo **.eslintrc.js** contido na raiz do projeto, para que fique assim :

```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["standard", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",
  },
};
```

> Isso adicionará as configurações recomendadas do Prettier e demais configurações necessárias para nosso projeto.

### Executando o linting

Para executar o linting automaticamente basta utilizar o seguinte comando no terminal :

```shell
npx prettier --check \<diretório de interesse>
```

Para averiguar possíveis erros relacionados ao linting :

```shell
npx eslint \<diretório de interesse>
```

Para solucionar erros identificados pelo ESLint

```shell
npx eslint --fix \<diretório de interesse>
```

> Caso tenha instalado o eslint globalmente, o próprio eslint apontará problemas diretamente na aba problemas do vscode para serem resolvidos.

## O plano de Q.A

A área de qualidade de software é muito vasta para ser tratada com toda sua profundidade num projeto cujo foco é o aprendizado de node, mas as vantagens conquistadas até mesmo num projeto pequeno como o atual, ao aplicar os fundamentos de Q.A, fazem com que seja viável a abordagem do tema mesmo que de forma superficial.

Dessa forma, o livro recomenda que criemos um plano de Q.A para cada projeto, independente do tamanho do projeto. E não é necessário que seja um plano muito elaborado, desde que nele sejam registradas todas as etapas executadas a fim de assegurar que o produto final funcione como esperado.

### Quando atualizar o plano de Q.A

O plano de Q.A é um documento ativo, o que significa que ele deverá ser atualizado sempre que:

- Forem adicionados novos recursos

- Forem feitas alterações em recursos existentes

- Forem removidos alguns recursos

- Forem alteradas as tecnologias do projeto, ou técnicas de teste

- Forem identificados defeitos que não foram identificados no plano de Q.A
  > Defeitos sempre ocorrem independente de quanto cuidado tomemos, o que devemos fazer quanto a isso é sempre se perguntar, como poderia ter sido evitado

### O que é a qualidade de software resumida para a web

A qualidade de software na web pode ser dividida entre quatro dimensões :
_Funcionalidade, usabilidade, estética e alcance_.

#### Funcionalidade

É basicamente o que seu site é capaz de entregar como funcionalidade, quanto mais funcional, mais usuários se manterão utilizando seu site (ninguém utiliza um site que não funciona).

> Através da funcionalidade do site podemos criar testes automatizados.

#### Usabilidade

A usabilidade é um conceito mais complexo, ela leva em consideração a interação entre o usuário e o seu software, através do conceito de usabilidade que definimos se nossa aplicação atende às necessidades do nosso público alvo.

> Esse seria o caso em que faríamos o teste do usuário.

#### Estética

Como o próprio nome indica, a estética leva em consideração padrões da sociedade do que é considerado atual, novo ou mesmo ultrapassado. Através da estética apelamos para o visual do site para adquirir a aceitação do público alvo.

> Esse é o mais subjetivo de todos, a forma mais prática de avaliar se o visual do site atende é pelo teste de amostragem.

#### Alcance

É a aceitação do produto no mercado, como quantos acessos, usos e visualizações do site. Do ponto de vista do desenvolvimento, a otimização do mecanismo de busca tem o maior impacto sobre o alcance, então é necessário pensar no SEO quando se fala de aplicações web. Por isso essa é uma das quatro métricas de Q.A na web.

## Testes

Quando falamos de testes em softwares, dois nomes vem instantaneamente na mente de qualquer programador.
Os chamados testes unitários e os testes de integração.
A diferença entre eles, é que um teste unitário examina conteúdos individuais para verificar se funcionam corretamente, enquanto que os testes de integração verifica a interação entre vários componentes ou até mesmo no sistema inteiro.

### Testes unitários

Os testes unitários abordam as menores unidades de funcionalidade da aplicação, como funções individuais por exemplo.
>Geralmente são criados pelos desenvolvedores, e não pela equipe de QA

No nosso repositório utilizaremos o [Jest](https://jestjs.io/docs/getting-started).

### Configurando o Jest

Primeiramente efetue a instalação do Jest no seu projeto:

```shell

npm i -D jest

```
Para executar os testes você deve criar um comando para executar os testes com npm, no arquivo `package.json`:

```json
"scripts":{
  "test":"jest"
  // Outros scripts abaixo...
}
```

### Entendendo sobre Mocking

Definição : ***O mocking é um processo utilizado para criar objetos que simulam o comportamento de objetos reais complexos, difíceis ou impossíveis de serem incorporados no teste unitário.***

Devemos tentar remover o máximo de dependências para criar  código testável.
Na prática, fazer com que nossas funções tenham apenas uma responsabilidade, é uma forma efetiva de se criar código testável.

Sempre haverá uma dependência, e sempre que houver, temos algo que deve ser "mockado" para que o teste seja eficaz.

>No capítulo atual foram feitas alterações para que possamos tornar cada uma das rotas testáveis, extraindo as rotas para uma pasta chamada lib (library)

Para criar um teste,utiliza-se a ideia de que dado um determinado teste com suas dependências, espera-se que a utilização do módulo responda de uma forma determinada.

O primeiro teste que consta no livro espera que a resposta para qual será a página renderizada seja a página home.
```js

const handlers = require("../handlers");
test("home page renders",()=>{
  const req = {};
  const res = { render:jest.fn()};
  handlers.home(req,res);
  expect(res.render.mock.calls[0][0]).toBe("home");
})

```
