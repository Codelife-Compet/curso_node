# Notas do Capítulo 2

## Para começar

Para que possamos adicionar outras funcionalidades e novos códigos ao repositório, primeiro temos que criar uma chave SSH para a comunicação direta entre nossa máquina local e o repositório em nuvem.

Caso ainda não tenha criado uma, sugiro que siga este excelente tutorial de [como criar uma chave SSH na máquina local e conectar ao github](https://gitlab.com/ad-si-2015-1/projeto1/-/wikis/tutorial-criar-e-configurar-chave-ssh#:~:text=1%20Logar%20no%20gitlab.com%202%20Entrar%20nas%20configura%C3%A7%C3%B5es,t%C3%ADtulo%20ser%C3%A1%20obtido%20do%20pr%C3%B3prio%20coment%C3%A1rio%20da%20chave.).

Nota
>É necessário estar familiarizado com o git e ter ele instalado na sua máquina.

### Clonando o repositório

1. Clique no botão code no repositório, selecione a opção SSH, e copie o link.

2. Com o terminal da sua máquina aberto (de preferencia no VSCODE), certifique-se de estar em um diretório onde possa organizar facilmente os códigos aqui desenvolvidos, recomenda-se um diretório como: `compet/codelife`.
Use o comando `cd <caminho do diretório` ou abra o vscode no diretório requerido e então abra o terminal dentro do Vscode.

3. Clone o repositório, usando o comando `git clone <link do repositório>`

4. Use o comando `cd curso_node` para ir até o diretório onde se encontra o código desenvolvido pela equipe.

Notas
>Para quaisquer dúvidas, ou caso tenha esquecido algum comando do git, recomendo esse [gist](https://gist.github.com/leocomelli/2545add34e4fec21ec16).

## Sobre o capítulo 2

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

Onde no nosso exemplo, substituímos \<script> por dev.

### Sobre o segundo exemplo

O segundo exemplo do capítulo 2 nos introduz algumas novidades em relação ao primeiro, que são:

- A utilização do que chamamos de roteamento

- Servindo arquivos estáticos html no nosso site

- A utilização do módulo fs para leitura de arquivos

- A atribuição de códigos de resposta do servidor.
