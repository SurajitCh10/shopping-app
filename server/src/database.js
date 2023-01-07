const mysql = require('mysql');

const conn = mysql.createConnection({
    
    host: 'localhost',
    user: 'node',
    password: 'node',
    database: 'c_kart_data'

});

conn.connect( (err) => {
    if(err)
        throw err;
    else {
        console.log('MySQL connection successful');

    }
});