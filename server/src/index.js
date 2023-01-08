const express = require('express');
const cors = require('cors');

const router = require('./routes');
const db = require('../models')

const app = express();

const client = process.env.CLIENT_PORT;

app.use(cors({ credentials: true, origin: 'http://localhost:'+client }));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(router);

const port = process.env.PORT;

db.sequelize.sync().then((req) => {
    app.listen(port, () => {
        console.log('Server is up on port ' + port);
    });
});


    