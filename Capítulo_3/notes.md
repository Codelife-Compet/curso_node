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
