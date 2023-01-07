const express = require('express');
const mysql = require('mysql');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(router);

const port = process.env.PORT;


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

    