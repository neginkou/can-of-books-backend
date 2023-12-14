const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  // standard key names are lowercased
    title: String,
    description: String
    // Status: String
  });
  
  // Mongoose Library lets us define what a document looks like - fields, data types, etc.
  
  // This "Dog" ends up being a constructor/class based on that schema
  // Mongoose will help us to manage that...
  const Book = mongoose.model('Book', booksSchema);
  
  // We're exporting it here so that we can ... i

  module.exports = Book;