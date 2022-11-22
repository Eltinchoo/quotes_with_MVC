//? dependecies
const express = require('express')

//? Routers

const quoteRouter = require('./quotes/quotes.router')

//? initial config
const port = 9000
const app = express()


//? Json request available
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok'})
})


//? API v1 Routes
app.use('/api/v1', quoteRouter)


//? start server
app.listen(port, () => {
    console.log('server started at port ' + port);
})