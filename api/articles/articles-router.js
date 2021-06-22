const express = require('express');
const router = express.Router();
const { restricted } = require('../auth/auth-middleware');
const Articles = require('../articles/articles-model');

router.get('/api/articles', restricted, async (req, res) => {
    try {
        const articles = await Articles.find();
        res.status(200).json(articles);
    } catch(err) {

    }
});

router.get('/api/articles/:id', restricted, async (req, res) => {
    const {id} = req.params;
    try {
        const article = await Articles.findById(id);
        res.status(200).json(article);
    } catch(err) {
        res.json(err.message);
    }
});

router.post('/api/articles', restricted, async (req, res) => {
    const article = req.body;
    try {
        const newArticle = await Articles.create(article);
        res.status(201).json(newArticle);
    } catch(err) {
        res.json(err.message);
    }
});

module.exports = router;