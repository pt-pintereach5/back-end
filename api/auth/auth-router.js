const express = require('express');
const router = express.Router();
const Auth = require('./auth-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../secrets/index');

router.get('/api/auth/users/:id', async (req, res) => {
    let {id} = req.params;
    try {
        const user = await Auth.findById(id);
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err.message);
    }
});

router.post('/api/auth/register', async (req, res) => {
    let {username, password} = req.body;
    try {
        const hash = bcrypt.hashSync(password, 8);
        password = hash;
        const newUser = await Auth.add({username, password});
        res.status(201).json(newUser);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/api/auth/login', async (req, res) => {
    let {username, password} = req.body;
    const user = await Auth.findBy({username});
    if (!user) {
        res.status(401).json({ message: "Invalid credentials" });
    } else {
        try {
            if (bcrypt.compareSync(password, user.password)) {
                const token = makeToken(user);
                res.json({ message: `Welcome back ${username}!`, token });
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