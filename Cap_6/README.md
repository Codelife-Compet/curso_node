# Capítulo 6

O capítulo 6 traz consigo o conteúdo digamos, principal da biblioteca express, por meio do qual, as requisições são feitas e as respostas são enviadas.

Para entender os princípios de funcionamento dos objetos de requisição e resposta, primeiro devemos entender como uma URL é construída e quais suas partes constituintes.

## O que é uma URL

Provavelmente a essa altura, você já deve saber o que é uma URL mesmo que de forma básica, entretanto, você já parou pra pensar nos elementos que a compõem?

Para responder essa questão veja as URL's abaixo:

`https://bing.com/search?q=grunt&first=9`
`https://google.com/#q=express`
`http://localhost:3000/about?test=1#history`

>Repare nos elementos em comum que cada uma traz consigo e as pequenas mudanças entre elas

### O protocolo
<p>
  <strong style = "color:red">
    https://
  </strong>
  localhost:3000/about?test=1#history
</p>

O protocolo determina como a requisição vai ser transmitida. Podemos lidar com diversos tipos de protocolos na web, e os mais comuns são os protocolos http, https, file e ftp.

### O Host

<p> https://
  <strong style = "color:red">localhost  
  </strong>
  :3000/about?test=1#history
</p>

Ele quem identifica o servidor, por exemplo o localhost, eles podem ser identificados por uma palavra ou endereço ip numérico. No caso da web, o host termina com um domínio de nível superior (Top-Level-Domain) como .com ou .net. Além de poder possuir subdomínios incluídos como prefixo do nome do host, como o www, que é um subdomínio muito comum (são opcionais).

### A Porta
<p>https://localhost
  <strong style = "color:red">
  :3000  
  </strong>
  /about?test=1#history
</p>

Cada servidor só pode estar associado a uma porta e existem uma coleção de portas numeradas que podem ser utilizadas. Alguns números são especiais, como a porta 80 e a 443. Se você omitir a porta no protocolo http, a porta 80 será assumida, já usando https a porta considerada é a 443.

Em geral, se não utilizarmos uma dessas portas, devemos utilizar número de porta com numeração maior que 1023 (pois são portas conhecidas e reservadas para serviços comuns).
O ideal é utilizar portas fáceis de lembrar, como 3000, 4000, 3333 ou 8080 .

### O path
<p>https://localhost:3000
  <strong style = "color:red">
  /about  
  </strong>
  ?test=1#history
</p>

Geralmente o path é a primeira parte da URL importante no que diz respeito a uma aplicação web, ela é comumente utilizada para identificar as páginas ou outros recursos da aplicação de forma exclusiva.

### As QueryStrings
<p>
    https://localhost:3000/about
  <strong style = "color:red">
  ?test=1
  </strong>
  #history
</p>

Também chamadas de strings de pesquisa, são uma coleção de pares name/value opcionais na url. Ela normalmente começa com um ponto de interrogação, e os pares name/value são separados por (E comercial) `&`.

Nesse caso tanto o name quanto o value deve ser codificados em URL, (a função interna do js encodeURIComponent já faz isso). Por exemplo, os espaços são substituídos por referências de caracteres numéricos.

### O Hash
<p>
    https://localhost:3000/about?test=1
  <strong style = "color:red">
  #history
  </strong>
</p>

O hash não é passado para o servidor, ele é de uso exclusivo do navegador. Geralmente, aplicações de página única podem utilizar o hash para fazer o controle da navegação do app.

## Verbos HTTP

O protocolo http define uma coleção de métodos de requisição (também chamados de verbos http ) que um cliente usa para se comunicar com o servidor.
> Os métodos de requisição mais comuns são os métodos GET, POST, PUT e DELETE

Quando digitamos uma URL em um navegador, ele emite uma requisição GET para o servidor. As informações importantes passadas para o servidor são essencialmente o ***Path*** e a ***QueryString*** da URL.
Com base nessas informações, o servidor decide como irá responder.

### O verbo GET

Como dito anteriormente, ele é o método que envia informações do servidor para o cliente. Ele também pode ser utilizado para enviar informações para o servidor, mas não é recomendado.

### O verbo POST

Geralmente utilizado para requisições em que o cliente envia informações para o servidor, é mais recomendado, visto que a utilização de um método POST exclui detalhes de implementação que uma requisição utilizando GET expõe na queryString.

### O verbo PUT

Comumente utilizado em requisições AJAX para especificar chamadas de API que atualizam algum dado.

### O verbo DELETE
Comumente utilizado em requisições AJAX para especificar chamadas de API que excluem algum dado.

## Cabeçalhos de requisição (Headers)

A URL não é a única coisa passada para o servidor quando navegamos para uma página. O navegador envia várias informações "invisíveis" sempre que visitamos um site. 

O navegador informará ao servidor em que idioma ele prefere receber a página, bem como informações sobre o *agentUser*(Informações sobre o navegador, sistema operacional e hardware) e outros dados.
Essas informações são passadas ao servidor através dos ***Headers*** do objeto de requisição.

## Headers de resposta

Basicamente igual aos headers do navegador, só que fazem o processo contrário, eles levam informações sobre o servidor para o cliente. Por exemplo qual tipo de conteúdo que deve ser servido pelo cliente (HTML, CSS, PNG entre outros) além de informações sobre como os dados estão compactados, o tipo de codificação, e até mesmo por quanto tempo ele pode armazenar recurso em cache.

O navegador deverá respeitar o tipo de conteúdo passado pelo servidor independente de qual for o path da URL. Logo, dá pra fazer com que o navegador sirva HTML a partir de um path /image.png (não tem porque fazer isso mas dá pra fazer).

Também é comum que eles contenham informações sobre o servidor, indicando seu tipo e até detalhes sobre o sistema operacional. Esse header é o header chamado
*X-Powered-by*

```js
// Não será feito no código original, mas sugiro que teste ao menos uma vez na sua aplicação.

app.disable('x-powered-by')

// Desabilita o header x-powered-by que vaza algumas informações do servidor
```

## Body da requisição

Uma requisição não contém apenas headers, afinal, as vezes é necessário passar algumas informações do cliente para o servidor, isso é feito usando o objeto body do objeto de requisição.

> Diferente da requisição POST, a requisição GET não possui body

Geralmente, os dados passados para body são codificados no formato *application/x-www-form-urlencoded*, que se trata simplesmente de pares name/value codificados e separados por "&" assim como as queryStrings.

Esses dados devem ser decodificados pelo servidor para serem utilizados, ai que entram alguns *middleware* do express, mas veremos isso mais adiante no curso.

## O objeto de requisição

Não falarei aqui dos métodos existentes do objeto de requisição do node, entretanto, caso esteja curioso, o livro possui dados referentes a alguns métodos desse objeto que serão utilizados aqui nesse repositório.
> A documentação do express exemplifica todos esses métodos caso esteja curioso basta acessar a [documentação do express](http://expressjs.com/)

## O objeto de resposta

## Sobre os exemplos desse capítulo

Decidi Separar os exemplos do capítulo 6 em duas partes, sendo elas `examples.js` e `tourController.js`.

Naturalmente, você deve relacionar o arquivo examples a um arquivo de exemplos, mas e o tourController, o que seria?

Caso esteja acompanhando o livro, deve ter reparado que no final do capítulo ele fornece uma série de exemplos, entre eles uma api onde o livro implementa os métodos GET, PUT e DELETE em um endpoint relacionado a um conjunto de **tours**.

>O arquivo tourController é onde são implementados os métodos GET,POST,PUT e DELETE.

### Os testes

Com exceção de alguns exercícios do capítulo 6, tentei ao máximo implementar os métodos do livro começando pela escrita dos testes, o que eu recomendo fortemente, pois são eles que vão averiguar se o desenvolvimento está de acordo o esperado.

> Alterei também o script de teste para que ele rode apenas testes que ainda não foram commitados

Caso queira aprender a desenvolver dirigido a testes, sugiro o acompanhamento do tema em alguns vídeos no YouTube que disponibilizarei no discord.

### A API

Não iremos nos aprofundar sobre o desenvolvimento da API no momento, até mesmo porque, existe um tópico no livro que trata exclusivamente sobre isso. Além disso, faremos uma migração do desenvolvimento da api, para desenvolvimento com Typescript e orientação a Objetos. Pra isso vamos ter que fazer algumas modificações na estrutura do projeto e configurações.

Agora sobre a API desenvolvida nesse capítulo, algumas coisas devem ser levadas em consideração.

### O processamento de formulários/Dados passados no corpo da requisição

Os dados recebidos no body do objeto de requisição estão codificados, e geralmente, o próprio servidor que informa a forma como esses dados estão codificados para que o navegador os envie. Mas ao receber esses dados, o servidor precisa decodificar essas informações utilizando um middleware chamado **bodyParser**, e as configurações desse middleware podem variar, mas para o padrão urlencoded:

```js
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))
```

De forma semelhante, para o formato JSON : 

```js
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
```
Com isso feito, podemos acessar os dados passados por formulários de forma simples no body do objeto de requisição:

* Caso o formulário utilizar o método POST 

```js
const user = req.body.user;
```

* Caso o formulário utilizar o método GET

```js
const user = req.query.user;
```
* Caso forem utilizados parâmetros de rota

```js
const userID = req.params.id;
```

### Testando as rotas da API

Imagino que você não tenha usado nenhuma aplicação para teste de endpoints e etc, e a verdade é que existem inúmeras formas de se testar uma api, mas a aplicação que vou recomendar é muito intuitiva de utilizar, se chama [insomnia]("https://insomnia.rest/download").

1. Uma vez instalado, abra o insomnia, e clique no botão create para criar um novo dashboard e selecione a opção request collection

2. Dê um nome para a collection e clique no botão create

3. Crie algumas variáveis de ambiente apertando CTRL+E
    ```JSON
    {
    "baseUrl":"http://localhost:4000"
    }
    ```
4. Feche a janela de variáveis de ambiente e crie uma rota clicando no botão + e selecione a opção Http request

5. Feito isso você poderá usar as rotas de acordo com o que sua api utiliza, se for um método GET por exemplo:
    
    >Você pode utilizar _.baseUrl/api/tours e checar a utilização da rota criada no servidor

6. Caso seja uma requisição POST, você deve modificar o método para POST e adicionar no Body o tipo de dado a ser enviado no body da requisição, por exemplo JSON

    No caso da nossa Api:
    ```json
    {
      "tour":{
        "id": 133,
        "name":"Testando API",
        "price" : 199.99
      }
    }
    ```
>Caso você já tenha alguma familiaridade com outra ferramenta, você pode utilizá-la ao invés da que vou sugerir aqui