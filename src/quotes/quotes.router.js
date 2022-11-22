//? dependencies

const router = require('express').Router()

const quoteServices = require('./quotes.services')

router.get('/quotes', quoteServices.getAllQuotes)
router.post('/quotes', quoteServices.postNewQuote)
router.get('/quotes/random', quoteServices.getRandomQuote)
router.get('/quotes/:id',quoteServices.getQuoteByID)

module.exports = router