const express = require('express');
const pool = require('./database');
const router = new express.Router();

const table = process.env.DB_TABLE;

router.post('/register', async (req, res) => {

    try {
        const {name, email} = req.body;
        const sqlQuery = 'INSERT INTO ' + table + ' (name, email) VALUES (?, ?)';
        const result = await pool.query(sqlQuery, [name, email]);

        res.status(201).send();
    } catch (e) {
        res.status(400).send(e.message);
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