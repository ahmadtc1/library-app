const express = require('express');
const debug = require('debug')('app:adminRoutes');
const { MongoClient } = require('mongodb');
const adminRouter = express.Router();

//In SQL there are databases and tables
//In Mongo there are databases and collections, collections slightly similar to a table

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  },
  {
    title: 'Les Misérables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false
  },
  {
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    read: false
  },
  {
    title: 'A Journey into the Center of the Earth',
    genre: 'Science Fiction',
    author: 'Jules Verne',
    read: false
  },
  {
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    read: false
  },
  {
    title: 'The Wind in the Willows',
    genre: 'Fantasy',
    author: 'Kenneth Grahame',
    read: false
  },
  {
    title: 'Life On The Mississippi',
    genre: 'History',
    author: 'Mark Twain',
    read: false
  },
  {
    title: 'Childhood',
    genre: 'Biography',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  }];

function router(nav) {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        //Declaring our client
        let client;
        try {
          //Using async await to wait for our client to connect to our mongo server on our localhost url
          client = await MongoClient.connect(url);
          debug('Connected correctly to server');

          //pull the database
          const db = client.db(dbName);

          //Inserting data
          //Collection is slightly similar to a SQL table
          //Setting the response variable to whatever is returned by the insert method
          const response = await db.collection('books').insertMany(books);
          //Converting the response object to json format and setting it as a response to the webpage
          res.json(response)
        }
        catch(err) {
          debug(err.stack);
        }

        //Closing the mongo connection
        client.close();
      }())
    });
  return adminRouter;
}

module.exports = router;
