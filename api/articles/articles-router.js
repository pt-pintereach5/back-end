const express = require('express');
const router = express.Router();
const { restricted } = require('../auth/auth-middleware');
const Articles = require('../articles/articles-model');
const Categories = require('../categories/categories-model');

router.get('/api/articles', restricted, async (req, res) => {
    try {
        const articles = await Articles.find();
        res.status(200).json(articles);
    } catch(err) {
        res.json(err.message)
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
        if (!article.title || !article.source || !article.author || !article.contents) {
            res.status(400).json({ message: "please fill all required fields" });
        } else {
            const newArticle = await Articles.create(article);
            res.status(201).json(newArticle);
        }
    } catch(err) {
        res.json(err.message);
    }
});

router.put('/api/articles/:id', restricted, async (req, res) => {
    const {id} = req.params;
    const article = req.body;
    try {
        const updArticle = await Articles.update(id, article);
        res.status(200).json(updArticle);
    } catch(err) {
        res.status(500).json(err.message)
    }
});

router.delete('/api/articles/:id', restricted, async (req, res) => {
    const {id} = req.params;
    try {
        const newArticlesList = await Articles.remove(id);
        res.status(200).json(newArticlesList);
    } catch(err) {
        res.status(500).json(err.message);
    }
});

router.get('/api/articles/:id/categories', restricted, async (req, res) => {
    const {id} = req.params;
    try {
        const artCategories = await Articles.findArticleCategories(id);
        res.status(200).json(artCategories);
    } catch(err) {
        res.status(500).json(err.message);
    }
});

router.post('/api/articles/:id', restricted, async (req, res) => {
    const {id} = req.params;
    const category = req.body;
    const categoryId = await Categories.findBy(category);
    try {
        const newAssign = await Articles.addArticleCategory({article_id: id, category_id: categoryId.category_id});
        res.status(200).json(newAssign);
    } catch(err) {
        console.log(id)
        console.log(categoryId);
        res.status(500).json(err.message);
    }
});

module.exports = router;