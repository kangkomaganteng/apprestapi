var mysql = require('mysql');
// buat koneksi ke database
const conn = mysql.createConnection({
host :'localhost',
user :'root',
password : '',
database : 'restapi'
});

conn.connect((error)=>{
if(error) throw error;
console.log('MYSQL Terkoneksi');
});

module.exports = conn;