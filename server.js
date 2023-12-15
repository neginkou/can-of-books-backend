'use strict';

// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Books = require('./Models/books.js');
const { default: mongoose } = require('mongoose');

const app = express();
app.use(cors());

// mongoose.connect(process.env.MONGODB_URL);

// teraches express how to parse/consume/translate information from a post or put request
app.use(express.json());

const PORT = process.env.PORT || 3001;


// this is a proof of life

// this is the "default" or "home page" route
app.get('/', (request, response) => {
  response.send('Home Page');
});

app.get('/test', (request, response) => {
  response.send('test request received');
});

// going to thunderclient and selecting get should return the object of books
// why does this need to be async and await?

// 1. this is grabbing the book data from the server to show on the client
app.get('/Books', async (request, response) => {

  try {
    // does this .find method connect the front to back?
    const booksData = await Books.find();
    response.status(200).json(booksData);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

// going to thunderclient and selecting post should return the response
// used ChatGPT to modify this code and include catch errors

// first part is route, then a callback function
app.post('/Books', async (request, response) => {

  try {
    const newBook = request.body;
    const createdBook = await Books.create(newBook);
    console.log('Book created:', createdBook);
    response.status(201).json(createdBook);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

// used John's demo13 code to write this fxn

app.put('/Books/:title', async (request, response) => {

  let book = request.body;
  let title = request.params.title;

  const updatedbook = await Books.findByIdAndUpdate( title, book, {new:true, overwrite:true })

  response.json(updatedbook);
});

// this is the delete to remove book with specific id from front-end
// the word after : needs to match the word after params.'id'
app.delete('/books/:title', async (request, response) => {
  try {
    let title = request.params.title;
    console.log('Deleteing', title);
    // mongoose method
    let deletedBook = await Books.findOneAndDelete({ title : title });
    console.log('deleted this book', deletedBook);
    // send an empty object back and status
    response.status(204).send({});
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});


// async function handleGetBooks(request, response) {
//   try {
//     const booksData = await Books.find();
//     response.status(200).json(booksData);
//   } catch (error) {
//     console.error(error);
//     response.status(500).json({ error: 'Internal Server Error' });
//   }
// }

const server = {
  start: function (port) {
    app.listen(port, () => console.log(`Up on port ${port}`));
  },
};

module.exports = server;
