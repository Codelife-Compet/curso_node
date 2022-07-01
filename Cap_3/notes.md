# Notas do Capítulo 3

O capítulo 3 nos introduz aos conceitos de *Scaffolding* que é um tipo especial de boilerplate, resumindo, é um programa que gera automaticamente código pronto, o express usa esse conceito, entretanto, durante o livro nesse inicio, não utilizaremos, e criaremos sempre os arquivos do zero.
>Um exemplo interessante de scaffolding é a geração de html 5 usando o vscode, não é abordado no livro mas já se espera que a gente saiba utilizar pois é algo relevante para o restante das aplicações.

## Como adicionar as dependências a partir de um repositório no github

Uma vez que estamos estudando para poder contribuir para o codelife, precisamos nos atentar a alguns detalhes importantes a respeito dos repositórios do github.

Basicamente, ao contribuir com qualquer repositório, atente-se ao arquivo README.md, nele estarão contidas informações importantes sobre o projeto e guias para contribuir e instalar as dependências na nossa máquina.

No nosso caso, quando falamos de adicionar dependências, simplesmente poderíamos instalar as dependências manualmente, mas isso é perda de tempo, visto que temos o arquivo `package.json` para isso.

Tendo isso em vista, para instalar automaticamente todas as dependências do projeto, precisamos apenas clonar o repositório e usar o comando:

 ```shell

npm install

```

>Muito importante saber usar o git corretamente, e clonar um repositório para que tudo corra bem.

## Métodos novos

Nos exemplos do capítulo 2 foram adotados métodos para efetuar a paginação do site usando node puro e sua biblioteca padrão, entretanto, repare na complexidade de compreensão do código e compare com o que estamos utilizando nesse capítulo, é muito mais fácil compreender o código utilizando o framework express, o que é um dos motivos para estudarmos sua utilização.

Os métodos utilizados para paginação são `app.get`e `app.use` eles estão adicionando as rotas possíveis para o site.
>sabe dizer a diferença entre get e use?

- O método get recebe dois parâmetros, `app.get(path,callback)`

    Onde path é o endpoint da rota na qual o método HTTP GET é usado (graças a app.METHOD(placeholder da documentação para identificar métodos HTTP), não importa se está em maiúsculo ou minúsculo, com barra no final, ponto, virgula,com querystrings).

    Já o callback é uma função que é chamada quando a rota é encontrada, os parâmetros passados para ela são os objetos de requisição e resposta `(req,res)=>{}` que serão abordados com mais profundidade no capítulo 6.
    O que você precisa saber agora é que ao acessar o servidor através do navegador, este recebe uma requisição com informações do seu navegador e computador, além de outras informações provindas da aplicação(no caso do método POST), e responde com um código de status e um conteúdo, no caso de um site, a página solicitada.

- A resposta configurada pelo nosso servidor possui código 200 por padrão(Código http para sucesso), e utiliza `res.type` para configurar o tipo de resposta, além de utilizar `res.send` para identificar o conteúdo enviado para o cliente.

- O método use identifica as páginas 404 e 500 de forma personalizada, utilizando *middlewares* para direcionar essas rotas.
    Estes são identificados pela quantidade de parâmetros.

### Fornecendo conteúdo para a página

A exemplo do que foi feito em todo o capítulo 3 o express nos mostra como é simples adicionar conteúdo à nossa página em comparação à utilização padrão do node. Ao utilizar as ferramentas padrão do node no capítulo 2, precisamos fazer a importação do módulo fs para leitura dos arquivos, e criar uma função própria para enviar esses arquivos para nossa página usando o método res.end do módulo http do node. Além da utilização de um filtro para pegar a url e traduzir em um caminho existente nos nossos arquivos.

Em contraste a isso temos no express a possibilidade de utilizar ***engines de renderização***, o que torna nosso trabalho realmente muito simples. A engine utilizada nesses momentos iniciais do livro é a engine ***handlebars***, mas não se apegue muito a ela! Melhore seu conhecimento em HTML CSS e Javascript, pois utilizaremos uma ferramenta muito mais poderosa no futuro, e é importante ter esses conhecimentos bem afiados.

### Configurando uma view engine corretamente

A medida que precisamos fornecer conteúdo relevante para nossa página, fornecer apenas texto para o usuário seria desperdício, por isso, utilizaremos os conceitos de view engines para fornecer conteúdos personalizados.

Para fornecer uma view utilizando o express é necessário após importar o módulo de express e usar o método express() para criar uma instância do express, configurar a engine através do método `engine` conforme exemplo abaixo:

---

![engine](https://user-images.githubusercontent.com/67330930/176910065-ba25d10e-2f76-44c0-9baa-1a688c51a4b7.gif)

---

### A engine handlebars

Para configurar a engine handlebars, apesar do que o livro mostra é necessário utilizar uma abordagem um pouco diferente:

```js
const express = require('express');
const expressHandlebars = require('express-handlebars'); 
const app = express();
const engineHandlebars = expressHandlebars.engine({
    defaultLayout:'main'
})
app.engine('handlebars',engineHandlebars);
app.set('view engine','handlebars')
```

Nesse código, instanciamos a configuração do handlebars definindo o layout padrão como sendo o arquivo `main.handlebars` que está no diretório `views/layouts`.
Em seguida fizemos com que o nosso app soubesse explícitamente que nossa view engine é a view handlebars configurada acima.
> Repare que colocamos 'handlebars' na configuração da engine, isto é criamos uma referência com o nome handlebars à engineHandlebars, e em seguida a utilizamos em app.set.

O express por padrão irá procurar por qualquer pasta com o nome no views na nossa aplicação, mas isso também é uma fonte de erros ao tentar rodar o código fora da raíz do projeto. Isso acontece, porque o express sempre procurará por uma pasta views a partir do ponto onde o código index.js foi chamado.

Se você rodar o código do exemplo do livro no terminal sem ir até a pasta onde se encontra seu projeto, isso causará um erro.

Para previnir isso, adicionamos o seguinte trecho à nosso código:

```js

app.set('views',__dirname+'/views')

```

>Esse código referencia explicitamente o diretório onde se encontra o arquivo index.js e vai até a pasta chamada views.

Agora com esses códigos adicionados podemos falar sobre como a engine handlebars lida com a renderização.

### Como o handlebars renderiza nossas páginas

Lembra que configuramos um diretório views explicitamente? Então, esse é o diretório onde nossas páginas geralmente ficam, e tem alguns pontos importantes que você precisa saber para adicionar conteúdos nessas páginas:

1. Você precisa ter um arquivo chamado main.handlebars
 Isso acontece porque nossa configuração determinou que nossa página possui um layout padrão, pense nele como uma parte do nosso código que não muda, e portanto não precisamos reescrever ele em todas as páginas que nossa aplicação pode ter. Por ser um layout padrão, você raramente fará alterações nele então, pense bem no que você irá adicionar nesse código.

2. Seu arquivo main.handlebars deve possuir dentro dele o trecho `{{{body}}}`:
 ```js
 <html>
  <head>
  </head>
  <body>
   {{{body}}}
  </body>
 </html>
 ```
 >Pra ser mais específico, esse é o lugar onde suas views vão ser renderizadas dentro do layout, então se você possuir uma view chamada home, o código html que estiver dentro dessa view será renderizado dentro de onde `{{{body}}}` está.
 >Veja o exemplo abaixo:
---

 ![views](https://user-images.githubusercontent.com/67330930/176916649-0ee5eb02-0638-46af-b024-c8bc7bef4562.gif)
 
---

Além disso você deve estar se perguntando como é possível adicionar imagens ao nosso conteúdo, e a resposta está em outra configuração adicional que precisaremos adiconar ao nosso app, no index.js ou qualquer nome de aplicação principal que estivermos usando.

```js
app.use(express.static(__dirname + '/public'));
``` 
>Esse código adiciona um ***middleware*** que especifica qual é o diretório padrão que nossos arquivos estáticos estarão. Basicamente sempre que voce utilizar um arquivo que contém um diretório relativo, como uma propriedade `src` da tag `img`, você colocará o diretório tomando como referência a pasta public do nosso diretório.
>Veja o exemplo abaixo:

---

![imagens](https://user-images.githubusercontent.com/67330930/176919303-02bad207-6a7c-4d33-8f2d-56dd5519b77a.gif)

---
> Repare que utilizamos novamente `__dirname` para manter a configuração relativa ao caminho do nosso arquivo principal ( que deve estar na raíz do projeto).

3. Dito isso basta renderizar nossas páginas usando o método get ou post do express, utilizando ao invés de `res.send`, `res.render(//nomeDaPáginaRenderizada)`.
 ```js
 app.get('/',(req,res)=>{
  res.render('home') // Arquivo home.handlebars que está na pasta views
  });
 ```
 
 ### Sobre conteúdo dinâmico
 
