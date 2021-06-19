const express = require('express');
const router = express.Router();
const Articles = require('../articles/articles-model');

router.get('/api/articles', async (req, res) => {
    try {
        const articles = await Articles.find();
        res.status(200).json(articles);
    } catch(err) {

    }
});

router.get('/api/articles/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const article = await Articles.findById(id);
        res.status(200).json(article);
    } catch(err) {
        res.json(err.message);
    }
});

module.exports = router;