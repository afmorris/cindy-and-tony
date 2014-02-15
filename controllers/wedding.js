﻿module.exports.controller = function(app) {
    app.get('/wedding', function(req, res) {
        res.render('wedding/index', { title : 'Home'});
    });

    app.get('/wedding/ceremony', function(req, res) {
        res.render('wedding/ceremony', { title : 'The Ceremony'});
    });

    app.get('/wedding/reception', function(req, res) {
        res.render('wedding/reception', { title : 'The Reception'});
    });

    app.get('/wedding/registries', function(req, res) {
        res.render('wedding/registries', { title : 'Our Registries'});
    });

    app.get('/wedding/guest-information', function(req, res) {
        res.render('wedding/guest-information', { title : 'Guest Information'});
    });
}