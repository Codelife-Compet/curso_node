const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

function serveStaticFile(res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('500 - erro no servidor!');
            }
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        })
        /*
        Essa função lê de forma síncrona os arquivos que são passados para ela
        como parâmetro no diretório path e retorna para o servidor os dados do
        arquivo com código 200 ou um erro com o código 500.
        */
}
// Criando as rotas do novo exemplo
const server = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/img/logo.png':
            serveStaticFile(res, '/public/img/logo.png', 'image/png');
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
})

server.listen(port, () => console.log(`Servidor iniciou na porta ${port};` +
    '\nAperte Ctrl+C para fecha-lo'));