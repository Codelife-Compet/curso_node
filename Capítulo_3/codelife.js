const e = require('express')
const express = require('express')
const expressHandlebars = require('express-handlebars') 
const app = express()
const port = process.env.PORT || 3000
const engineHandlebars = expressHandlebars.engine({defaultLayout:'main'})
const fortuneCookies = [
    "Domine Nodejs ou o NodeJs te dominará",
    "Deus ajuda quem programa na madruga",
    "Hoje você deveria escutar a oração do programador",
    "Hoje você terá que criar uma issue no nosso repositório",
    "Hoje você vai ter que criar uma página e renderizar ela usando express",
    "Hoje você vai ter que adicionar um arquivo CSS ao nosso documento",
    "Hoje você vai ter que adicionar um arquivo CSS ao nosso documento",
    "Hoje você vai ter que adicionar um arquivo CSS ao nosso documento",
    "Hoje você vai subir o código para o github",
    "Hoje você vai ter que escolher alguém pra explicar uma parte do código",
    "Hoje você vai ter que escolher alguém pra explicar uma parte do código",
    "Hoje você vai ter que escolher alguém pra explicar uma parte do código",
    "Hoje você vai ter que escolher alguém pra explicar uma parte do código",
    "Hoje você vai ter que escolher alguém pra explicar uma parte do código",
    "Hoje você vai ter que explicar uma página do código",
    "Hoje você vai ter que explicar uma página do código",
    "Hoje você vai ter que explicar uma página do código",
    "Hoje você vai ter que explicar uma página do código",
    "Hoje você vai ter que explicar uma página do código",
    "Hoje você vai ter que explicar uma página do código",
    "Hoje você vai ter que explicar uma página do código",
]
app.engine('handlebars', engineHandlebars)
app.set('view engine','handlebars')
app.get('/cookieSort', (req, res) => {
    const randomFortune=fortuneCookies[Math.floor(Math.random()*fortuneCookies.length)]
    res.render('cookieSort',{fortune:randomFortune})
})
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.use(express.static(__dirname+'/public'))
app.use((err, req, res, next) => {
    console.error(err)
    res.status(404)
    res.render('404')
})
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))