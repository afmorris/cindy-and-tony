module.exports.controller = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index', { title : 'Home'});
    });
}