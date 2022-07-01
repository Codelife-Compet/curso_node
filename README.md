# Curso node.js

## Introdução

Este é um repositório destinado para acompanhar e avançar nos estudos de Node.js através do livro de apoio ***Programação web com Node e Express - Ethan Brown*** e aplicando os conhecimentos de git e github para colaboração entre os membros.

## Objetivos

O objetivo deste repositório é desenvolver habilidades práticas de desenvolvimento web, beneficiando-se da stack Javascript para posteriormente aplicar tais conhecimentos no projeto codeLife.

## Tecnologias utilizadas

Aqui estão algumas tecnologias que serão utilizadas no nosso repositório, você pode clicar para ser redirecionado às documentações de cada tecnologia.

---
[![HTML](https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=white&style=for-the-badge)](https://www.w3schools.com/html/)
[![CSS](https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white&style=for-the-badge)](https://www.w3schools.com/Css/)
[![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge)](https://devdocs.io/express/)
[![Puppeteer](https://img.shields.io/badge/-Puppeteer-40B5A4?logo=puppeteer&logoColor=white&style=for-the-badge)](https://devdocs.io/puppeteer/)
[![Jest](https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white&style=for-the-badge)](https://jestjs.io/docs/getting-started)
[![Handlebars](https://img.shields.io/badge/-handlebars-000000?logo=handlebarsdotjs&logoColor=white&style=for-the-badge)](https://handlebarsjs.com/guide/)
[![MongoDb](https://img.shields.io/badge/-MongoDb-47A248?logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com/docs/)
[![bootstrap](https://img.shields.io/badge/-bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge)](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

---

## Como contribuir com o projeto

Este é um repositório de aprendizado, então, caso você tenha chegado recentemente, recomendo o seguinte:

1. **Se habitue a utilizar o git** : 
    
    Tem um mini tutorial logo abaixo de [como criar uma chave SSH e clonar o repositório na sua máquina local](#clonando-o-projeto), além de ensinar o processo de instalação do git e outras configurações importantes.
    >O processo de aprendizado do uso do git será algo que dependerá de você, e da prática, procure aprender o básico e evolua aos poucos, confie em mim.

2. **Utilize o github o máximo possível**:
    Este é o lugar onde você pode tirar suas dúvidas, mostrar sua evolução e se preparar para o desafio de verdade, que é melhorar nosso querido codelife. Abuse das issues, abaixo estarão algumas dicas de [como utilizar bem as ferramentas do github]().

3. **Leia o livro**!
    Nosso repositório segue uma bibliografia incrível do [Ethan Brown](https://github.com/EthanRBrown) que ensina do zero a utilizar o express para desenvolver aplicações web reais tocando cada ponto importante para tal. O link está na seção de [links úteis](#links-úteis).

4. **Habitue-se a aprender**:
    Há muitas tecnologias envolvidas no desenvolvimento web, mas a base do desenvolvimento web não é abordado nesse livro. Se você é um total iniciante em programação, busque aprender a base (javascript,HTML e CSS), recomendo muito a plataforma [DIO](https://www.dio.me/sign-in) para isso.

## Clonando o projeto

Primeiramente baixe o git no seu computador através deste [link](https://git-scm.com/downloads) e instale-o na sua máquina:


## Links úteis

Aqui serão adicionados links considerados úteis para o prosseguimento do aprendizado, tanto dos atuais membros quanto para membros futuros.

* [Markdown](https://github.com/DavidAnson/markdownlint/blob/v0.23.1/doc/Rules.md#md001)

* [Web_Development_with_Node_and_Express_Leveraging_the_JavaScript_Stack_by_Ethan_Brown_(z-lib.org).pdf](https://github.com/Codelife-Compet/curso_node/files/8893487/Web_Development_with_Node_and_Express_Leveraging_the_JavaScript_Stack_by_Ethan_Brown_.z-lib.org.pdf)

* [Node e Express](https://github.com/EthanRBrown/web-development-with-node-and-express-2e)

* [git e github](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)

* [Vídeo-aulas de Node](https://www.youtube.com/watch?v=LLqq6FemMNQ&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=1)

* [GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)

## I
## Dependências e Módulos

Cada capítulo possui algumas dependências e módulos necessários para seu pleno funcionamento. Aqui listamos por capítulos cada pacote instalado, e a forma como foi instalado.

### Capítulo 2

Dependência | código | Exemplo de utilização
:---:|:---:|:---:
Nodemon | `npm install --save-dev nodemon` | `nodemon código.js`

http ( módulo padrão do node ) | `const http= require('http')` | `http.createServer()`

fs ( módulo padrão do node ) | `const fs= require('fs')` | `fs.readFile()`

---

### Capítulo 3

Dependência | comando de uso/instalação | Exemplo de utilização
:---:|:---:|:---:
Express| `npm install express` | `const express = require('express')`

express-handlebars | `npm install express-handlebars` | `const expressHandlebars = require('express-handlebars')`

Nodemon | `npm install --save-dev nodemon` | `nodemon código.js`

---

## Arquitetura dos exemplos

Cada capítulo possuirá notas importantes para serem lidas posteriormente, bem como a estrutura dos exemplos contidos no livro.
