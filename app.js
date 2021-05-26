const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
const viewsPath = path.join(__dirname, './views')
const publicPath = path.join(__dirname, './public')
const partialsPath = path.join(__dirname, './partials')

hbs.registerPartials(partialsPath)

const port = process.env.PORT || 8080 

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicPath))

app.get('/', (req, res)=>{
    res.render('index', {
        title: 'Dawn of the atomic age'
    })
})

app.get('/politics', (req, res)=>{
    res.render('politics', {
        title: 'Politics during the Cold War'
    })
})

app.get('/economics', (req, res)=>{
    res.render('economics', {
        title: 'The economy during the Cold War'
    })
})

app.get('/society', (req, res)=>{
    res.render('society', {
        title: 'American society during the Cold War'
    })
})

app.get('/sources', (req, res)=>{
    res.render('sources', {
        title: 'Sources'
    })
})

app.get('/*', (req, res)=>{
    res.send('Solve this easter egg and text me the results for a $50 reward: 01000010000001101001. Here is my number: 1000000000011001011110010101010010000001')
})

app.listen(port, ()=>{
    console.log('Server is up and running of port '+port)
})
