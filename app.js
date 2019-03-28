const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();
const bookRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Ficiton',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  },
  {
    title: 'War and Peace2',
    genre: 'Historical Ficiton2',
    author: 'Lev Nikolayevich Tolstoy2',
    read: false
  },
  {
    title: 'War and Peace3',
    genre: 'Historical Ficiton3',
    author: 'Lev Nikolayevich Tolstoy3',
    read: false
  },
  {
    title: 'War and Peace4',
    genre: 'Historical Ficiton4',
    author: 'Lev Nikolayevich Tolstoy4',
    read: false
  },
  {
    title: 'War and Peace5',
    genre: 'Historical Ficiton5',
    author: 'Lev Nikolayevich Tolstoy5',
    read: false
  },
  {
    title: 'War and Peace6',
    genre: 'Historical Ficiton6',
    author: 'Lev Nikolayevich Tolstoy6',
    read: false
  },
];


bookRouter.route('/')
  .get((req, res) => {
    res.render(
      'books',
      {
        nav: [{ link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }],
        title: 'Library',
        books
      });
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send("Hello single book");
  });

app.use('/books', bookRouter);
app.get('/',
  (req, res) => {
    res.render(
      'index',
      {
        nav:
          [
            { link: '/books', title: 'Books' },
            { link: '/authors', title: 'Authors' }
          ],
        title: 'Library',
      }
    );
  });

app.listen(port, () => {
  debug(`running on port ${chalk.magenta(port)}`);
});
