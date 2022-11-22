//? file's imports
const quoteControllers = require("./quotes.controllers");

const getAllQuotes = (req, res) => {
  const data = quoteControllers.findAllQuotes();
  res.status(200).json(data);
};

const getQuoteByID = (req, res) => {
  const id = req.params.id;
  const data = quoteControllers.findQuoteByID(id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.data(404).json({ message: "Invalid ID" });
  }
};

const postNewQuote = (req, res) => {
  const { quote, author, year } = req.body;

  if (quote) {
    const data = quoteControllers.createNewQuote({ quote, author, year });
    res.status(201).json(data);
  } else {
    res
      .status(400)
      .json({
        message: "Invalid data",
        fields: { 
            author: "string",
            quote: "string*",
            year: 2022 },
      });
  }
};

const getRandomQuote = (req, res) => {
    const data = quoteControllers.findRandomQuote()
    
    if(data){
        res.status(200).json(data)
    }else {
        res.status(400).json({message: 'Db is empty'})
    } 
}

module.exports = {
    getAllQuotes,
    getQuoteByID,
    getRandomQuote,
    postNewQuote
}