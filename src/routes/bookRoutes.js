const express = require('express');
const bookRouter = express.Router();
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:bookRoutes');
const bookController = require('../controllers/bookController');

function router(nav) {
    const { getIndex, getById, middleware } = bookController(nav);
    
    bookRouter.use(middleware);

    bookRouter.route('/')
        .get(getIndex);

    bookRouter.route('/:id')
        .get(getById);
    return bookRouter;
}


module.exports = router;
