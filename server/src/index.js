const express = require('express');
const mysql = require('mysql');

const router = require('./routes');

const app = express();
const bodyParser = require('body-parser');

app.use(router);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port = process.env.PORT;

const conn = mysql.createConnection({
    
    host: 'localhost',
    user: '',
    password: '',
    database: 'c_kart_data'

});

conn.connect( (err) => {
    if(err)
        throw err;
    else {
        console.log('MySQL connection successful');
        
        app.listen(port, () => {
            console.log('Server is up on port ' + port);
        });

    }
});