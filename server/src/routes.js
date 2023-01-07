const express = require('express');
const router = new express.Router();

router.post('/register', async(req, res) => {

    try {
        res.status(201).json({status: 'Registered'});
    } catch (e) {
        res.status(400).json({status: 'Failed'});
    }

});

router.post('/login', async(req, res) => {

    try {
        res.status(200).json({status: 'Logged In'});
    } catch (e) {
        res.status(400).json({status: 'Failed'});
    }

});

router.post('/logout', async(req, res) => {

    try {
        res.status(200).json({status: 'Logged Out'});
    } catch (e) {
        res.status(400).json({status: 'Failed'});
    }

});

module.exports = router;