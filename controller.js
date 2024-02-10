'use strict';
var respose = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    respose.ok('Aplikasi REST API Ku berjalan.!')
};