# Capítulo 4

Essas são as notas referentes ao capítulo 4 do livro Programação web com node e express.
>Escrito por *Henrique de Paula Rodrigues*

## O que o capítulo traz de novidade

O capítulo atual traz como novidade a re-estruturação das pastas e a organização dos diretórios usando usando as melhores práticas consideradas pelo autor **David Flanagan**.

O livro adota como boas práticas, o **versionamento**, e a **garantia de qualidade** (**QA**)

Outro tema muito relevante tratado nesse capítulo são sobre os **módulos javascript**, e aqui trarei informações atuais sobre como lidamos com módulos no javascript hoje em dia.

## O que são melhores práticas

O termo *best pratices* é muito conhecido no universo da programação como um modelo a ser seguido. São formas de organização e estruturação do código que geralmente trazem bons resultados quando se está trabalhando com projetos reais, e que facilitam ou melhoram a manutenção do código.

Também é tido como o contrário/solução dos chamados *code smells* que são práticas ruins ou que podem causar problemas futuros em relação ao desenvolvimento do projeto.

> Nem sempre as melhores práticas são as mais rápidas, mas sim as práticas que trazem melhores resultados em vista do longo prazo.

## O que é versionamento

Se você é membro do Codelife, provavelmente já sabe algo sobre o controle de versões, graças ao [README do projeto](/README.md).
Mas basicamente o controle de versões permite que façamos coisas extraordinárias em relação a documentação, experimentação e organização de projeto.

- Cada membro é responsável pelo código que criou e podemos ver cada passo que foi feito até a entrega do código.
- É possível testar novas funcionalidades, criar novas coisas sem interferir no código principal, o que também é incrível.
- Poder voltar em alterações feitas anteriormente como se viajássemos no tempo no código, pra resolver aquele bug que sabe Deus o que pode ter causado...

Por fim é importante que você caro membro do Codelife, esteja habituado e pronto para usar o git e o github como ferramenta pois ele possibilita que façamos coisas excepcionais com nosso código. Uma recomendação do autor para aprendizado do git é [esse link](https://try.github.io) sinta-se a vontade para buscar esse conhecimento.

## Módulos

Ao efetuar o processo de instalação de um pacote usando o node ou o yarn que seja, aparece no diretório uma pasta chamada ***node_modules***. Trata-se da possibilidade de reutilizar código de terceiros sem precisar de reinventar a roda.

Essa pasta não deve ser alterada, e nenhum arquivo contido nela, e também não deve estar no repositório do github, para isso deve-se criar um arquivo chamado ***.gitignore*** contendo o seguinte código : 

```.gitignore
/node_modules
.env
.env.locals
# outros arquivos a serem ignorados abaixo...
```
### O que é o arquivo Package.json

O arquivo package.json é onde se encontram todos os metadados do seu projeto, como scripts, dependências de desenvolvimento e de projeto, nome dos autores, nome do projeto entre outras coisas... Esse arquivo é criado assim que começamos um novo projeto com o node, utilizando `yarn init` ou `npm init`.
> Caso queira criar um arquivo package.json padrão, basta simplesmente utilizar o comando: `npm init --y`

Sempre que instalamos qualquer pacote no nosso projeto, adicionamos nas dependências do projeto, o nome e a versão do pacote que instalamos.
 
### O que são os módulos no node

Os módulos do Node oferecem um mecanismo pra modularização e encapsulamento de código.
Os módulos são comumente importados de duas formas:

```js
const express = require('express'); // commonJS

import express from "express" // ESModules
```
Os módulos são um mecanismo que você naturalmente utilizará por toda etapa de desenvolvimento, pois a modularização de código facilita na manutenção e garantia de qualidade, possibilitando que cada arquivo lide apenas com o que lhe cabe, e assim possua sua função bem estabelecida.

para exportar existem várias formas diferentes, mas a utilizada neste capítulo é a seguinte :
```js
exports.nomeDoMétodo = () = > {
  // Função a ser exportada pelo módulo
}
```

A outra forma de importação é comumente chamada de ***ESModules***, e essa em questão atualmente é amplamente utilizada tanto no desenvolvimento front-end, quanto no desenvolvimento back-end, e vale a pena aprender a utilizar.

Entretanto, deixarei essa etapa mais a frente quando passarmos a codar usando as técnicas mais atuais do mercado, onde precisaremos utilizar outras configurações adicionais para que o projeto avance.

## O que adicionamos de novo no código nesse capítulo

No capítulo atual, a única mudança relevante referente ao código foi a extração dos biscoitos da sorte do arquivo principal do projeto para o um módulo criado dentro de uma pasta chamada lib. Essa técnica facilitará o desenvolvimento de técnicas futuras, então recomendo que se acostume com a criação desses módulos na pasta especificada.