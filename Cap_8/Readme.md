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
> Se *method* for omitido, o navegador vai considerar como sendo o método GET

### Os inputs

De diversos tipos, os inputs controlam o que será enviado para o formulário, podem ser entradas de textos, ou uma caixa de seleção, ou mesmo um arquivo. Independente do tipo são os inputs que dão significado para a conexão com o servidor, sem eles faríamos requisições vazias para o servidor, o que obviamente não é o que normalmente se pretende.

```html
<form action ="/auth" method = "POST" onSubmit="onSubmitAuth"> 
  <input type = "text" id = "username" name = "username">
</form>
```
> A propriedade name é passada para o servidor, então no caso acima recuperaríamos essa informação por meio de Request.body.username

### Submit

Essa é a etapa que crava a conexão entre o client e o server, normalmente um botão, mas desde que a tag possua o tipo submit, ela vai ser utilizada para dar inicio ao evento onSubmit do formulário. Esse evento por padrão provoca o recarregamento da página, mas veremos como evitar isso.

```html
<form action ="/auth" method = "POST" onSubmit="onSubmitAuth"> 
  <input type = "text" id = "username" name = "username">
  <input type = "password" id = "password" name = "password">
  <button type = "submit"> login </button>
</form>
```
> O evento submit e quaisquer outros eventos do javascript disparados no client-side podem ser controlados de forma a não ocorrer conforme o padrão através da função preventDefault, você provavelmente vai usar em algum momento então fica a dica. 

## Codificação

A codificação nada mais é que a forma com que o server interpreta as informações passadas para o client.
Caso você não especifique nenhuma, o server vai tentar sempre interpretar esses dados como sendo `application/x-www-form-urlencoded`, basicamente Codificado em url (transforma espaço em %20 e tudo mais). Por isso devemos utilizar o middleware `body-parser` para fazer a decodificação desse formato, mas esse não é o único existente, como veremos nesse capítulo podemos precisar fazer upload de arquivos, imagens ou outros tipos, e pra isso precisamos de outra forma de codificação (***multipart/form-data***).

## Redirecionado páginas ou simplesmente enviando uma mensagem de sucesso na tela

Existem muitas abordagens para manipulação de formulários, mas focarei apenas nessas duas. A primeira tem como base o seguinte cenário:

### Redirecionamento sem mensagem flash

Você efetua o processamento do formulário e em seguida o redireciona para uma página na qual você acredita que deva ser a página que o usuário desejaria acessar. Ou mesmo caso haja um erro, ele ser redirecionado para uma página de erro por exemplo. Essa abordagem bastante comum e simples de implementar é a abordagem inicial que seguiremos no caso do exemplo que veremos logo em seguida sobre inscrição de uma mail list.

### Com envio de mensagens flash

Essa abordagem que será abordada no capítulo 9 fornece pra gente a possibilidade de fornecer um feedback para o usuário sem interromper o fluxo de navegação, o que é ótimo para UX. Ideias como essa são sempre bem vindas e sua implementação, como veremos no capítulo seguinte não é tão complicada.

## Usando a fetch API

A API padrão do javascript fornece uma maneira mais poderosa e moderna de se fazer a comunicação client/server e permite que haja menos atualizações de páginas. Graças a isso, não precisamos nos preocupar com redirecionamentos e assim podemos utilizar apenas uma rota para a experiência de inscrição de formulários. 

Veja o exemplo abaixo sobre como utilizar a API Fetch diretamente:
```js
const body = JSON.parse({nome:"Henrique",email:"teste@gmail.com",_csrf:"CSRF de teste"})
const headers = {"Content-Type":"application/json"};
fetch("/api/newsletter-signup",{method:"post",body,headers})
    .then(json=>{
      feedback.innerHTML="Obrigado por se inscrever!"
      container?.insertAdjacentElement("afterbegin",feedback);
    })
    .catch(err=>{
      feedback.innerHTML="Foi mal deu um erro ai!"
      container?.insertAdjacentElement("afterbegin",feedback)
    })
```
Nesse exemplo, passamos um body definido, e um header contendo o tipo do conteúdo enviado pela requisição no header, com isso espera-se que caso haja sucesso, o fetch crie um elemento de feedback dentro da div container da aplicação.
Isso é especialmente útil para a utilização da abordagem citada no livro a respeito de mensagens flash que implementaremos adequadamente no próximo capítulo.

A fetch API poderia usar qualquer tipo de dado na requisição. Nesse exemplo utilizamos apenas JSON, mas poderíamos criar rotas que aceitam mais de um tipo de dado e então responder com base nesse tipo de dado recebido.

## Upload de arquivos

Pra ser sincero se tem uma funcionalidade que eu acredito que seja interessante de aprender independente da linguagem é a manipulação e utilização de arquivos. O livro utiliza o multiparty mas você pode utilizar qualquer outra de sua preferencia.

Quando você criar o seu formulário no HTML, a tag "FORM" deverá receber o atributo enctype="multipart/form-data". O método de envio deve ser POST. O campo que vai permitir que o usuário escolha a imagem deve ser um campo input do tipo "file".

Adicionalmente, você deve pensar no multiparty como se fosse o body-parser só que para arquivos multimídia. Basicamente você sabe que ele funciona, e isso por enquanto é tudo que precisamos saber.

### Rota que utiliza codificação multiparty

Bom, quando você estiver trabalhando com esse tipo de rota ela vai ter uma aparência similar a seguinte:
```js
app.post('/upload-test', (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    if(err){
      return res.status(500).send({error:err.message});
    }
    handlers.processUpload(req,res,fields,files);
  });
});

```
Claro, assim como antes, temos a possibilidade de utilizar requisições ajax com fetch API, o que torna o nosso trabalho muito mais fácil, para isso é necessário converter o formulário utilizado para um objeto formData, que faz com que o objeto fetch possa aceitá-lo diretamente como corpo da requisição. Finalizado, vamos pro capítulo 9, tratar de Cookies e Sessões.