// This fille will connect to the database server, add some documents, and then disconnect
const mongoose = require('mongoose');
require('dotenv').config();

// Bring in our Dog Schema
const Books = require('./Models/Book.js');

// Open a connecton to the database
mongoose.connect(process.env.MONGODB_URL);

async function seed() {

    const Book1 = new Book({
        Title: 'Rich dad Poor dad',
        Description: 'Building wealth',
        Status: 'Top Five'

    });

    const Book2 = new Book({
        Title: 'Harry Potter',
        Description: ' life and adventures of a young wizard named Harry Potter',
        Status: 'Top Five'

    });

    const Book3 = new Book({
        Title: 'Green Lights',
        Description: ' life and adventures of an actor named Matthew',
        Status: 'Top Five'
    });
    // Use .save()
    try {
        await Book1.save();
        console.log("Saved");
        await Book2.save();
        console.log("Saved");
        await Book3.save();
        console.log("Saved");
    } catch (e) {
        console.error(e.message);
    }

    mongoose.disconnect();

}

seed();