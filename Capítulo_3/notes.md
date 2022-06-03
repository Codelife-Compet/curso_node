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
