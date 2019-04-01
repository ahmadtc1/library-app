const express = require('express');
const bookRouter = express.Router();
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:bookRoutes');
const bookController = require('../controllers/bookController');

function router(nav) {
    const { getIndex } = bookController(nav);
    bookRouter.use((req, res, next) => {
        if (req.user) {
            next();
        }
        else {
            res.redirect('/');
        }
    })

    bookRouter.route('/')
        .get(getIndex);

    bookRouter.route('/:id')
        .get();
    return bookRouter;
}


module.exports = router;
