const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const hbs = exphbs.create({
    partialsDir: ["views"]
})

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.use(express.static("public"))

const products = [
    {
        name: "Chocolate Batom",
        un: "UN",
        price: "R$ 1,00",

    },
    {
        name: "Chocolate Biz",
        un: "CX",
        price: "R$ 5,00"
    },
    {
        name: "Toblerone",
        un: "UN",
        price: "R$ 3,50"
    },
]

app.get('/products', (req, res) => {
    res.render('products', { products })
})

app.get('/prodEspec', (req, res) => {
    res.render('prodEspec', { products })
})

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log("Sevidor iniciado na porta: 3000")
})