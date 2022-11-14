# Capítulo 8
Nessa seção abordaremos um breve resumo sobre o que é e como fazer a manipulação de formulários usando o express.

## Enviando dados

O principal objetivo de se utilizar formulários na web é comunicar o client com o server, utilizando formulários, podemos fazer isso de duas formas:

- QueryStrings
  - Utiliza o método GET para enviar informações
  - Vaza detalhes de implementação
- Request Body
  - Utiliza o método POST para enviar informações para o server
  - Não é mais seguro que o método POST

## Qual a cara de um formulário Web?

Por mais que a implementação e utilização de formulários possa mudar a depender da aplicação, os formulários em geral possuem alguns elementos de interesse que não costumam faltar independente do tipo de formulário:

### Tag Form

A tag Form delimita a existência do formulário, ela que fornece semântica para que o navegador entenda como a conexão será feita e quais informações serão passadas pelo formulário para o server.

A tag form possui duas propriedades especiais que identificam a rota utilizada e o método da requisição:

```html
<form action ="/lesson" method = "POST"> ... inputs e etc </form>
```