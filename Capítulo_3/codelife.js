const express = require('express') 
const app = express()
const port = process.env.PORT||3000
app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Aqui ficaria a página principal do codelife')
})
app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('Aqui ficaria a página sobre o codelife por exemplo')
})
app.use((err, req, res, next) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Página não encontrada')
})
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Erro no servidor')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))