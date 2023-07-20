const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

let playerGuesses = [];

// GET & POST Routes go here
app.get('/numbers', (req, res) => {
  console.log("Arrived at /numbers", playerGuesses)

  // Server responds with the playerGuesses
  res.send(playerGuesses)

})

app.post('/addguesses', (req, res) => {
  console.log('Body for guesses:', req.body);
 
  let guessesToAdd = req.body
  playerGuesses.push(guessesToAdd)

  console.log("current guesses:", playerGuesses)
  res.sendStatus(201)
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
