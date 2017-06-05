'use strict'
var mongoose = require('mongoose');
var app      = require('./app');
const port = process.env.PORT || 3765;
// mongodb://<dbuser>:<dbpassword>@ds163721.mlab.com:63721/albums
// mongodb://localhost:27017/albums
mongoose.connect('mongodb://admin:th3r4v3n@ds163721.mlab.com:63721/albums', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Database server running...');
    }
    app.listen(port, function() {
            console.log('App listening on port: '+port);
            res.send('You are connected');
    });
});