const express = require('express');
const bookRouter = express.Router();
const bookService = require('..//services/goodreadsService');
const debug = require('debug')('app:bookRoutes');
const bookController = require('../controllers/bookController');

function router(nav) {
    const { getIndex, getById, middleware } = bookController(bookService, nav);
    
    bookRouter.use(middleware);

    bookRouter.route('/')
        .get(getIndex);

    bookRouter.route('/:id')
        .get(getById);
    return bookRouter;
}


module.exports = router;
