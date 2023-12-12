'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

const app = express();
app.use(cors());
mongoose.connect(process.env.MONGODB_URL);

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/Books', handleGetBooks);

async function handleGetBooks( request, response ) {
  let filter = { };
  const Books = await Books.find(filter)
  response.status(200).json(Books);
}

// Mongoose Library lets us define what a document looks like - fields, data types, etc.

// This "Dog" ends up being a constructor/class based on that schema
// Mongoose will help us to manage that...
// const Books = mongoose.model('Books', booksSchema);

// We're exporting it here so that we can ... import it elsewhere

const server = {
  start: function(port) {
    app.listen(port, () => console.log(`Up on port ${port}`))
  }
}

module.exports = server;