'use strict';
var response = require('./res');
var connection = require('./koneksi');


exports.index = function(req, res){
    response.ok('Aplikasi REST API Ku berjalan.!',res)
};
// menampilkan semua data
exports.tampilsemuadata = function(req, res) {
    connection.query('SELECT * FROM data_siswa', function (error, rows) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};
// menampilkan data berdasarkan ID
exports.tampildataid = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM data_siswa where id = ?', [id], function (error, rows) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};