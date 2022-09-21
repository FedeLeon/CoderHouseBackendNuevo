const express = require(`express`)
const app = express()
const rutas = require('./routes/index')
const path = require('path')
const { engine } = require('express-handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Engine del Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layout/main.hbs'),
    layoutsDir: path.join(__dirname, './views/layout'),
    partialsDir: path.join(__dirname, './views/partials')
}))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'hbs')


//Rutas
app.use('/api', rutas)
app.use(express.static(__dirname + `/public`))

app.get(`/api`, (req , res ) => {
    res.sendFile(__dirname + `/public/index.html`)
})


//Servidor
app.listen(8080, ()=> {
    console.log("Escuchando el puerto 8080")
})