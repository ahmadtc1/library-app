function goodReadsService() {
    function getBookById() {
        return new Promise((resolve, reject) => {
            resolve({ description: 'Our Description' });
        });
    }

    return { getBookById };
}

module.exports = goodReadsService();
