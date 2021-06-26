const express = require('express');
const router = express.Router();
const Auth = require('./auth-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../secrets/index');

router.post('/api/auth/register', async (req, res) => {
    let {username, password} = req.body;
    if (!username || !password) {
        res.status(400).json({ message: 'please provide a username and password' });
    } else {
    try {
        const hash = bcrypt.hashSync(password, 8);
        password = hash;
        const newUser = await Auth.add({username, password});
        res.status(201).json(newUser);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
    }
});

router.post('/api/auth/login', async (req, res) => {
    let {username, password} = req.body;
    const user = await Auth.findBy({username});
    if (!user) {
        res.status(404).json({ message: "There is no user with that username" });
    } else {
        try {
            if (bcrypt.compareSync(password, user.password)) {
                const token = makeToken(user);
                res.status(200).json({ message: `Welcome back ${username}!`, token });
            }
            else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch(err) {
            res.json(err.message);
        }
    }
});

function makeToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: "3h"
    }
    return jwt.sign(payload, JWT_SECRET, options)
}


module.exports = router;