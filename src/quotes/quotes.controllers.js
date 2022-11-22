const quotesDB = []
let id = 1


const findAllQuotes = () => {
    return quotesDB
}

const findQuoteByID = (id) => {
    const filteredQuote = quotesDB.find(quote => quote.id == id)
    return filteredQuote
}

const createNewQuote = (obj) => {
    const newQuote = {
        id: id++,
        author: obj.author? obj.author : 'Anonymous', //? campos opcionales
        quote: obj.quote,
        year: obj.year || 'year unknown' //? campos opcionales
    }
    quotesDB.push(newQuote)
    return newQuote
}

const findRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesDB.length)
    return quotesDB[randomIndex]
}
module.exports = {
    findAllQuotes,
    findQuoteByID,
    createNewQuote,
    findRandomQuote
}