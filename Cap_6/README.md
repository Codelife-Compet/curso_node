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

O protocolo determina como a requisição vai ser transmitida. Podemos lidar com diversos tipos de protocolos na web, e os mais comuns são os protocolos http, https, file e ftp.

### O Host

Ele quem identifica o servidor, por exemplo o localhost, eles podem ser identificados por uma palavra ou endereço ip numérico. No caso da web, o host termina com um domínio de nível superior (Top-Level-Domain) como .com ou .net. Além de poder possuir subdomínios incluídos como prefixo do nome do host, como o www, que é um subdomínio muito comum (são opcionais).

### A Porta

Cada servidor só pode estar associado a uma porta e existem uma coleção de portas numeradas que podem ser utilizadas. Alguns números são especiais, como a porta 80 e a 443. Se você omitir a porta no protocolo http, a porta 80 será assumida, já usando https a porta considerada é a 443.

Em geral, se não utilizarmos uma dessas portas, devemos utilizar número de porta com numeração maior que 1023 (pois são portas conhecidas e reservadas para serviços comuns).
O ideal é utilizar portas fáceis de lembrar, como 3000, 4000, 3333 ou 8080 .

### O path

Geralmente o path é a primeira parte da URL importante no que diz respeito a uma aplicação web, ela é comumente utilizada para identificar as páginas ou outros recursos da aplicação de forma exclusiva.

### As QueryStrings

Também chamadas de strings de pesquisa, são uma coleção de pares name/value opcionais na url. Ela normalmente começa com um ponto de interrogação, e os pares name/value são separados por (E comercial) `&`.

Nesse caso tanto o name quanto o value deve ser codificados em URL, (a função interna do js encodeURIComponent já faz isso). Por exemplo, os espaços são substituídos por referências de caracteres numéricos.

### O Hash

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