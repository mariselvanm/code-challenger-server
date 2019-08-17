import mysql from 'mysql';

const db =  mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'codechallenger'
});

export { db };

// 'user strict';


// var mysql = require('mysql');

// //local mysql db connection
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
//     database : 'codechallenger'
// });

// connection.connect(function(err) {
//     if (err) throw err;
// });

// module.exports = connection;