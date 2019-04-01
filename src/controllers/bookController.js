const { MongoClient, ObjectID } = require('mongodb');

function bookController(nav) {
    function getIndex(req, res) {
        const url = 'mongodb://localhost:27017';
        const dbName = 'libraryApp';

        (async function mongo() {
            let client;

            try {
                client = await MongoClient.connect(url);
                debug('Correctly connected to server');

                const db = client.db(dbName);
                const col = await db.collection('books');
                const books = await col.find().toArray();
                res.render(
                    'bookListView',
                    {
                        nav,
                        title: 'Library',
                        books
                    }
                );
            }
            catch (err) {
                debug(err.stack);
            }
            client.close();
        }());

    }

    function getById() {
        return
    }
    return {
        getIndex,
        getById
    };
}

module.exports = bookController;