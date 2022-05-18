# Notas do Capítulo 2

Adicionamos o nodemon usando o comando
  
```shell 
npm install --save-dev nodemon

```
Este pacote é utilizado como um utilitário do node, para que ao salvar o código atual o servidor seja reiniciado sem a necessidade de utilizar o seguinte código:

```shell
node <diretório>/<nome_do_arquivo>
```
Entretanto, é necessário configurar um script para utilização deste utilitário no arquivo *package.JSON* localizado na raiz do projeto.

Para isso, na área "scripts" do arquivo package.JSON adicionamos a chave **"dev"** com valor **"nodemon capitulo_2/helloworld.js>"** da seguinte forma:

```JSON
"scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon Capítulo_2/helloworld.js"
    },
```

Para rodar o servidor e reiniciá-lo devemos utilizar o seguinte código no terminal:

```shell
npm run <script>
```

Onde no nosso exemplo, substituimos <script> por dev.
