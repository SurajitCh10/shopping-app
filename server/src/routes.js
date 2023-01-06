const express = require('express');
const router = new express.Router();

router.post('/register', async(req, res) => {

    try {
        res.status(200).send();
    } catch (e) {
        res.status(400).send();
    }

});

router.post('/login', async(req, res) => {

    try {
        res.status(200).send();
    } catch (e) {
        res.status(400).send();
    }

});

router.post('/logout', async(req, res) => {

    try {
        res.status(200).send();
    } catch (e) {
        res.status(400).send();
    }

});

module.exports = router;