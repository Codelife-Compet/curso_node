# Capítulo 9

O capítulo 9 trás para nosso conhecimento, as sessões e os cookies, que não são lá tanta novidade para nós nessa altura do campeonato. Todos nós já ouvimos falar dos cookies. Estão em todos os cantos na web moderna e a sua utilização ajuda a personalizar a experiência de usuário.

Mas antes de aprender a utilizar os cookies é necessário entender o porque ele é necessário.
E isso pode ser respondido pela forma como o protocolo HTTP funciona, que é definida pela MDN como sendo um protocolo stateless.
Ou seja, quando se acessa uma página na web, e se passa para uma outra página no mesmo site, o servidor e o navegador não tem uma maneira de saber se o navegador está visitando o mesmo site.
De outra forma, a web funciona de forma que cada requisição http deve conter todas as informações necessárias apenas para que o servidor a atenda.

## Cookies

Para tornar a web o que ela é hoje armazenar o estado era necessário de alguma forma. Nisso os cookies podem ser implementados, onde o servidor envia uma informação e o navegador a armazena por algum período de tempo configurável.

Entretanto, esses dados não são ocultados do usuário. Todas essas informações ficam disponíveis para serem avaliadas pelo usuário, excluídas, alteradas e tudo mais. Os cookies podem até serem criptografados, mas geralmente não são usados dessa forma. Também é possível assinar os cookies para que não possam ser alterados mas não provem nenhum tipo de segurança criptográfica.

Sempre que um navegador cria uma requisição para o servidor contendo um cookie associado, esse conteúdo pode ser alterado e isso que origina o tipo de ataque XSS(cross-site scripting). É basicamente um código javascript malicioso modificando o conteúdo dos cookies.
Usar os cookies assinados e configura-los como http-only aumenta a segurança contra esse tipo de ataque.

### Tornando cookies seguros

Para utilizar um cookie, é necessário que se passe um segredo que deve ser conhecido apenas pelo servidor para criptografar cookies seguros antes que eles sejam enviados para o cliente.

Esse tipo de informação deve ser mantida apenas no servidor e não deve ser compartilhada em nenhum outro lugar. Para que isso seja feito, podemos fazer uso de variáveis de ambiente utilizando **dotenv** ou outras tecnologias feitas com esse propósito.

Na aplicação utilizada no livro, utiliza-se uma camada de abstração acima do arquivo que contém as credenciais para tornar mais fácil gerenciar as dependências do projeto conforme ele cresce.

Essa camada estará no arquivo .credentials.js que você deve criar para conter as informações sensíveis do projeto como tokens de apis, credenciais de sessões/cookies ou mesmo as credenciais para os JWT que veremos mais a frente.

Eis um exemplo:
```JSON
 {
  "cookieSecret" : "mysecret2a3524wse78qwe1253aa8sd",
  "InstagramApiToken":"AS26diuqweIUasdSAsgubodafasd56488",
}
```
> Esse arquivo deverá ser importado pela camada de abstração onde as estão as configurações do servidor, como as configurações do multer por exemplo.

Esse arquivo é importado pela camada de configuração
```js
const env = process.env.NODE_ENV || 'development';
const credentials = require(`./.credentials.${env}`);
```

> por razões óbvias não subimos as credenciais para o repositório do github, então você mesmo terá de criar essas configurações.

### Usando um cookie

Para usar um cookie, é necessário instalar o middleware do express chamado cookie-parser. Obviamente não é só instalar, então como todo middleware que instalamos, vamos usá-lo:

```js
const cookieParser = require("cookie-parser");
const {credentials} = require("./config");
app.use(cookieParser(credentials.cookieSecret));
```

Com isso podemos utilizar esses cookies nas rotas bastando apenas invocar  os métodos que envolvem os cookies do objeto de resposta.

```js
const cookieController = (req,res)=>{
  // criando cookies
  res.cookie("teste","valor do teste");
  res.signedCookie("teste_assinado","Cookie protegido contra alterações",{signed:true});
  // acessando cookies
  const teste = req.cookies.teste;
  const {teste_assinado} = req.signedCookies;
  // excluindo um cookie
  res.clearCookie("teste");
}
```
Existem muitas configurações que podemos adicionar no objeto de configuração dos cookies. Mas isso você mesmo pode ver na documentação ou mesmo na utilização deles no seu projeto.
Em geral as mais utilizadas são para configurar o tempo de duração (maxage) se pode ser alterado pelo cliente httponly e a opção signed que cria um cookie assinado contra modificação que tem precedência a cookies normais.

## Sessões

As sessões são apenas uma maneira mais conveniente de manter o estado. Para que sejam implementadas, algo tem de ser armazenado no cliente;