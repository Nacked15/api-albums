'use strict'
var mongoose = require('mongoose');
var app      = require('./app');
const port = process.env.PORT || 3765;

mongoose.connect('mongodb://localhost:27017/albums', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Database server running...');
    }
    app.listen(port, function() {
            console.log('App listening on port: '+port);
    });
});