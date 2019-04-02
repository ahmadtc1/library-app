const axios = require('axios');
const xml2js = require('xml2js');

const parser = xml2js.Parser({ explicitArray: false });

function goodReadsService() {
    function getBookById(id) {
        return new Promise((resolve, reject) => {
            axios.get('https://www.goodreads.com/book/show/656.xml?key=zU3O4cJ1qHe0jzL8Br77w')
                .then((response) => {
                    parser.parseString(response.data, (err, result) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            console.log(result);
                            resolve(result.GoodreadsResponse.book);
                        }
                    })
                })
                .catch((error) => {
                    reject(error);
                    console.log(error);
                })
            resolve({ description: 'Our Description' });
        });
    }

    return { getBookById };
}

module.exports = goodReadsService();
