module.exports.controller = function(app) {
    app.get('/wedding', function(req, res) {
        res.render('wedding/index', { title : 'Home'});
    });

    app.get('/wedding/ceremony', function(req, res) {
        res.render('wedding/ceremony', { title : 'Ceremony'});
    });

    app.get('/wedding/reception', function(req, res) {
        res.render('wedding/reception', { title : 'Reception'});
    });

    app.get('/wedding/registries', function(req, res) {
        res.render('wedding/registries', { title : 'Registries'});
    });

    app.get('/wedding/guests', function(req, res) {
        res.render('wedding/guests', { title : 'Guest Information'});
    });
}