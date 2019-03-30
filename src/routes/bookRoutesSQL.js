const express = require('express');
const bookRouter = express.Router();
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');

function router(nav) {

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
            (async function query() {
                const request = new sql.Request();
                const { recordset } = await request.query('select * from books');
                res.render(
                    'bookListView',
                    {
                        nav,
                        books: recordset,
                        title: 'Library'
                    }
                );
            }());
        }
        );

    bookRouter.route('/:id')
        .all((req, res, next) => {
            (async function query() {
                const { id } = req.params;
                const request = new sql.Request();
                const { recordset } =
                    await request.input('id', sql.Int, id)
                        .query('select * from books where id = @id');
                [req.book] = recordset;
                next();                
            }());
        })
        .get((req, res) => {
            res.render(
                'bookView',
                {
                    nav,
                    book: req.book,
                    title: 'Book '
                }
            );
        });
    return bookRouter;
}


module.exports = router;