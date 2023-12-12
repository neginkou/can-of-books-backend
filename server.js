'use strict';

// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Books = require('./Models/books.js');
const app = express();
app.use(cors());
// mongoose.connect(process.env.MONGODB_URL);

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {
  response.send('test request received');
});

app.get('/Books', handleGetBooks);

async function handleGetBooks(request, response) {
  try {
    const booksData = await Books.find();
    response.status(200).json(booksData);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}

const server = {
  start: function (port) {
    app.listen(port, () => console.log(`Up on port ${port}`));
  },
};

module.exports = server;
