const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'demo',
    password: 'demo',
    database: 'c_kart',
    connectionLimit: 5
});

pool.getConnection((err, connection) => {

    if(err) console.log('Database connection error');

    if(connection) connection.release();
    
    return;
});

module.exports = pool;