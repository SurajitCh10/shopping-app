const express = require('express');
const router = require('./routes');

const app = express();
const bodyParser = require('body-parser');

app.use(router);
const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});