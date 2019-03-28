const express = require('express');

const bookRouter = express.Router();

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
            res.render(
                'bookListView',
                {
                    nav: nav,
                    books
                });
        });

    bookRouter.route('/:id')
        .get((req, res) => {
            const { id } = req.params;
            res.render(
                'bookView',
                {
                    nav: nav,
                    book: books[id]
                });
        });
    return bookRouter;
}


module.exports = router;