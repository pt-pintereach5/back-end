const express = require('express');
const router = express.Router();
const { restricted } = require('../auth/auth-middleware');
const Categories = require('./categories-model');

router.get('/api/categories', restricted, async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(200).json(categories);
    } catch(err) {
        res.status(500).json(err.message);
    }
});

router.post('/api/categories', restricted, async (req, res) => {
    const category = req.body;
    try {
        const newCategory = await Categories.create(category);
        res.status(201).json(newCategory);
    } catch(err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;