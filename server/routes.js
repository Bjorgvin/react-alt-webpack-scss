module.exports = function(app) {
    // get all songs that have been added
    app.get('/hello', function(req, res) {
        res.send('Hello World!');
    });
}
