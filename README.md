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
    
    Tem um mini tutorial logo abaixo de [como instalar e configurar o git](#instalando-e-configurando-o-git)
    >O processo de aprendizado do uso do git será algo que dependerá de você, e da prática, procure aprender o básico e evolua aos poucos, confie em mim.

2. **Utilize o github o máximo possível**:
    Este é o lugar onde você pode tirar suas dúvidas, mostrar sua evolução e se preparar para o desafio de verdade, que é melhorar nosso querido codelife. Abuse das issues para tirar dúvidas, falar sobre problemas no código e organizar suas tarefas. 

    No link a seguir estarão algumas dicas pra quem está [iniciando no github](https://docs.github.com/pt/get-started/quickstart/hello-world).

3. **Leia o livro**!
    Nosso repositório segue uma bibliografia incrível do [Ethan Brown](https://github.com/EthanRBrown) que ensina do zero a utilizar o express para desenvolver aplicações web reais tocando cada ponto importante para tal. O link está na seção de [links úteis](#links-úteis).

4. **Habitue-se a aprender**:
    Há muitas tecnologias envolvidas no desenvolvimento web, mas a base do desenvolvimento web não é abordado nesse livro. Se você é um total iniciante em programação, busque aprender a base (javascript,HTML e CSS), recomendo muito a plataforma [DIO](https://www.dio.me/sign-in) para isso.

### Clonando o projeto

Primeiramente certifique-se de ter seguido o tópico [Instalando e configurando o git](#instalando-e-configurando-o-git), se já o fez, basta copiar o link de contribuição do repositório:

![cloneCodelife](https://user-images.githubusercontent.com/67330930/177046265-080696ad-ae99-4ce0-a737-0d575ab9e4b3.gif)

E usar o seguinte comando no terminal do seu computador: 

```bash
$ git clone <link-de-contribuição-do-repositório>

```
>Lembre-se de abrir o terminal na pasta onde quiser clonar o projeto

![cloneCodelifeTutorial](https://user-images.githubusercontent.com/67330930/177046540-7c3f9199-dc16-41af-a61f-84ba4010a019.gif)

> cd curso_node abre a pasta que foi criada a partir do clone do projeto, e então você tem acesso a todo o conteúdo desenvolvido separado por capítulos.

Instale as dependências do projeto utilizando 

```bash
$ npm install
```
![npmInstall](https://user-images.githubusercontent.com/67330930/177047608-6ea058e7-7580-4a1b-8a6a-c080e7e13f15.gif)

>Certifique-se de estar no diretório raíz do projeto (./curso_node)
### Comandos no package.json

Como estamos utilizando o módulo nodemon como dependência de desenvolvimento, podemos criar scripts automatizados para serem rodados no terminal.
No nosso repositório vamos padronizar o nome dos scripts principais como cap<númeroDocapítulo>, e usaremos o nodemon para rodar esses scripts, de forma que não precisaremos mais encerrar e re-executar o script manualmente a cada alteração o arquivo `package.json` terá algo como:

```json
"scripts":{
"cap2": "nodemon /Cap_2/index.js"
}
```
Para rodar esse script basta rodar o comando :

```bash

$ npm run cap2

``` 
![npmRun](https://user-images.githubusercontent.com/67330930/177048027-e191ee5e-57b9-4c7a-86be-5954efaf2d6f.gif)

> Esse comando é equivalente a executar `node Cap_2/index.js`, só que toda vez que houver uma alteração no projeto você deverá apertar CTRL+C e executar esse comando novamente.

### Instalando e configurando o git

Primeiramente baixe o git no seu computador através deste [link](https://git-scm.com/downloads) e instale-o na sua máquina:

![gitTutorialINstalation](https://user-images.githubusercontent.com/67330930/177046006-05ad1227-a783-42ef-aed1-71a17cdb4908.gif)

#### Configurando usuário e email

Uma vez instalado é hora de configurar! Para isso abra o terminal da sua máquina (se estiver usando windows, clique com o botão direito do mouse e selecione a opção bash here :

![bashere](https://user-images.githubusercontent.com/67330930/177048523-2e5fc63a-a3db-4ff4-85ad-e4963faa43ac.gif)

Em seguida configure o nome de usuário e o seu email padrão através dos comandos:

```bash
$ git config --global user.name "<nomeDoUsuário>"
$ git config --global user.email <emailDoUsuário>
```
 ![gitconfig](https://user-images.githubusercontent.com/67330930/177048691-7482d39f-fe2a-4f39-9944-fcf6c7385498.gif)
> Esses dados são utilizados pelo git para encriptar cada commit em um código único usando a criptografia SHA1

#### Criando uma chave SSH
O SSH é um protocolo de rede que permite que a conexão com determinados servidores por meio de uma comunicação criptografada, trazendo mais segurança para as transações de dados.
No Github essa tecnologia é utilizada para gerenciar seus repositórios e suas contribuições de forma remota.

Para gerar uma chave SSH utilize o seguinte comando:

```bash

$ ssh-keygen -t ed25519 -C "your_email@example.com"

```
> Isso gerará um flow no terminal que solicitará a pasta onde o arquivo de encriptação se encontra, uma senha e sua confirmação

![ssh](https://user-images.githubusercontent.com/67330930/177049148-7c4fba6f-43ae-4c34-85cb-e7a2f723b22b.gif)

Agora vá até a pasta solicitada, abra o arquivo criado com o bloco de notas e copie esse código:

![sshCopy](https://user-images.githubusercontent.com/67330930/177049640-5c8ecfb8-2af9-43a7-bbe6-c095982aa5b3.gif)

>No seu caso copie o código que possui pub no final.

No github vá até [configurações SSH](https://github.com/settings/keys), selecione new SSH key, dê um nome para sua chave, e cole o conteúdo copiado, salve, e em seguida será solicitado uma autenticação, após feita, seu github está devidamente configurado e pronto para ser utilizado!

## Como contribuir para o repositório

Deixarei neste tópico algumas boas práticas para serem seguidas ao contribuir com nosso repositório.

### Regra zero do repositório
Não que existam outras regras numeradas, mas essa realmente merece esse nome.

***NUNCA***, eu disse, ***NUNCA*** , faça alterações diretamente na branch main.
O motivo é bem simples, o código da branch main, é o código principal do repositório. É a partir dele que quem vai desenvolver novos códigos vai se basear, e por isso, esse código deve ser estável (que significa que foi revisado e testado, além de funcionar de acordo com o que é esperado).

Então a única maneira de fazer isso é proibindo o uso da branch main para edição direta, logo para fazer edições crie uma nova branch com um nome sugestivo para a o que você pretende fazer e ao terminar, crie um [pull request](#criando-um-pull-request) para iniciar o processo de revisão do código.

### Criando pontos de progressão

Para manter a organização, planejamento e distribuição de tarefas para os membros, precisamos primeiramente separar nossas issues/tarefas em capítulos usando os milestones do github para acompanhar a progressão dos capítulos do livro.

Para criar um milestone siga o exemplo abaixo:

![milestone](https://user-images.githubusercontent.com/67330930/177050971-da969cbe-548e-4906-ab87-754ad511bd7c.gif)

### Criando issues/tarefas

Em cada capítulo são determinadas algumas tarefas e ao criar uma issue no repositório deve-se sempre cumprir os seguintes pontos:

1. Dar um título expressivo, que descreva sucintamente o que deve ser feito na issue
2. Descrever as tasks a serem cumpridas, usando a marcação de task-list do markdown
3. Marcar os responsáveis pela execução da tarefa
4. Utilizar as labels/tags de acordo com a natureza da atividade
5. Marcar o milestone/capítulo referente àquela issue/tarefa
6. Após criar a issue, em development, crie uma branch focada na execução da tarefa (se for uma tarefa que envolva código) ou relacione com um pull request aberto 

### Criando um pull request

Se você é novo no github esse termo pode ser novidade pra você, e possivelmente você nunca o fez, mas é algo simples e fácil de se fazer.

Ao adicionar código ao nosso repositório, provavelmente você já tem conhecimento sobre o [básico do git](https://www.git-scm.com/book/pt-pt/v2/Come%C3%A7ando-O-B%C3%A1sico-do-Git#:~:text=%20O%20B%C3%A1sico%20do%20Git%20%201%20Imagens%2C,antes%20de%20ser%20armazenado%20e%20%C3%A9...%20More%20), e também já sabe sobre a [regra zero do repositório](#regra-zero-do-repositorio), então você já criou uma branch para o desenvolvimento do seu código e subiu esse código para o repositório através de um push.

Agora é o momento de fazer seu pull request, e aqui vamos listar as boas práticas para você mostrar pra gente o que você fez:

1. Insira um bom título para a issue.
2. Descreva o que foi feito.
    Não é necessária uma descrição minunciosa pois o código faz isso por você, mas boas descrições facilitam o entendimento do código durante as revisões
3. Tenha uma issue linkada.
    * Caso você já tenha uma issue criada, basta clicar em development e selecionar a issue correspondente
    * Caso não tenha nenhuma issue criada, não faça nada, posteriormente pode ser criada uma issue linkando esse pull request.
4. Certifique-se de marcar os responsáveis pelo desenvolvimento do código
5. Marque alguém para revisar o código: provavelmente haverá alguém responsável por isso por padrão, caso contrário, marque alguém que seja capaz de revisar seu código.
6. Use bem as labels, e certifique-se de que elas são compatíveis com seu pull request

## Links úteis

Aqui serão adicionados links considerados úteis para o prosseguimento do aprendizado, tanto dos atuais membros quanto para membros futuros.

* [Markdown](https://github.com/DavidAnson/markdownlint/blob/v0.23.1/doc/Rules.md#md001)

* [Web_Development_with_Node_and_Express_Leveraging_the_JavaScript_Stack_by_Ethan_Brown_(z-lib.org).pdf](https://github.com/Codelife-Compet/curso_node/files/8893487/Web_Development_with_Node_and_Express_Leveraging_the_JavaScript_Stack_by_Ethan_Brown_.z-lib.org.pdf)

* [Node e Express](https://github.com/EthanRBrown/web-development-with-node-and-express-2e)

* [git e github](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)

* [Vídeo-aulas de Node](https://www.youtube.com/watch?v=LLqq6FemMNQ&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=1)

* [GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)

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
### Capítulo 4

Dependência | comando de uso/instalação | Exemplo de utilização
:---:|:---:|:---:
n/a| n/a| n/a
---
### Capítulo 5

Dependência | comando de uso/instalação | Exemplo de utilização
:---:|:---:|:---:
eslint| `npm i -D eslint ` | `npm run lint`
prettier | `npm install -D prettier` | `npx prettier Cap_5 -c`
jest | `npm install -D jest ` |
puppeteer | `npm install -D puppeteer ` |
---
## Arquitetura dos exemplos

Cada capítulo possuirá notas importantes para serem lidas posteriormente, bem como a estrutura dos exemplos contidos no livro.
