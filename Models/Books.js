const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    Title: String,
    Description: String,
    Status: String
  });
  
  // Mongoose Library lets us define what a document looks like - fields, data types, etc.
  
  // This "Dog" ends up being a constructor/class based on that schema
  // Mongoose will help us to manage that...
  const Books = mongoose.model('Books', booksSchema);
  
  // We're exporting it here so that we can ... i