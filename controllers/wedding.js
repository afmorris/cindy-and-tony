module.exports.controller = function(app) {
    app.get('/wedding', function(req, res) {
        res.render('wedding/index', { title : 'Home'});
    });

    app.get('/wedding/ceremony-and-reception', function(req, res) {
        res.render('wedding/ceremony-and-reception', { title : 'The Ceremony & Reception'});
    });

    app.get('/wedding/registries', function(req, res) {
        res.render('wedding/registries', { title : 'Our Registries'});
    });

    app.get('/wedding/guest-information', function(req, res) {
        res.render('wedding/guest-information', { title : 'Guest Information'});
    });
}