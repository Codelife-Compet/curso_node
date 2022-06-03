const express = require('express')
const expressHandlebars = require('express-handlebars') 
const app = express()
const port = process.env.PORT || 3000

const engineHandlebars = expressHandlebars.engine({
    defaultLayout:'main'
})
app.engine('handlebars',engineHandlebars)
app.get('/', (req, res) => {
    res.type('text/plain')
    res.render('home')
})
app.get('/about', (req, res) => {
    res.type('text/plain')
    res.render('about')
})
app.use((err, req, res, next) => {
    res.type('text/plain')
    res.status(404)
    res.render('404')
})
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.render('500')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))