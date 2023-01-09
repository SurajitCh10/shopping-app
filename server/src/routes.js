const express = require('express');
const {v4 : uuidv4} = require('uuid');

const path = require('path');
const fs = require('fs');
const formidable = require('formidable');

const {user} = require('../models');
const checkEmail = require('../middleware/verifySignup');
const authUser = require('../middleware/authUser');
const uploadFile = require('../middleware/upload');

const router = new express.Router();

router.post('/register', checkEmail, async (req, res) => {

    try {
        
        const token = uuidv4();

        user.create({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            password: req.body.password,
            token
        }).catch((e) => {
            if(e) console.log(e);
        });

        res.status(201).send({ message: "Registered !!", token });
    } catch (e) {
        res.status(400).send(e.message);
    }

});

router.post('/login', async(req, res) => {

    try {
        
        const User = await user.findOne({
            where: {
                email: req.body.email
            }
        });

        if(User) {
            
            if(req.body.password === User.password) {
                const token = uuidv4();

                user.update({
                    token
                }, {
                    where: {
                        email: req.body.email
                    }
                })

                const check_admin = 1 ? User.admin : 0;

                res.status(200).send({ message: "Logged In !!", token, name: User.name, admin: check_admin});
            } else {
                res.status(400).send({ message: "Password Incorrect !!" });
            }
        } else {
            res.status(404).send({ message: "User does not exist !!" })
        }

    } catch (e) {
        res.status(400).send(e.message);
    }

});

router.post('/logout', authUser, async(req, res) => {

    try {
        user.update({
            token: null
        }, {
            where: {
                // token: req.header('Authorization').replace('Bearer ', '')
                token: req.body.token
            }
        })
        res.status(200).send({ message: "Logged Out !!" });
    } catch (e) {
        res.status(400).send(e.message);
    }

});

router.post('/upload', async(req, res) => {

    try {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {

            var oldPath = files.file.filepath;
            var newPath = path.join(__dirname, 'assets') + '/' + files.file.originalFilename;
            var rawData = fs.readFileSync(oldPath);
    
            fs.writeFile(newPath, rawData, (err) => {
        
                if (err) console.log(err);
                    return res.send("Successfully uploaded");
            }); 
        });
    } catch (e) {
        res.status(400).send(e);
    }
    
    });

module.exports = router;


    