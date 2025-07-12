const express = require("express");
const newsRoute = express.Router();

const verifyToken = require('../MIDDLEWARE/verifyToken')
const { uploadNews } = require('../MULTERHANDLER/uploadNewsImage')

const { getAllArticles, getArticleById,searchArticlesByCategory,searchArticlesByTags } = require('../CONTROLER/newsControler')

// get all articles
newsRoute.get('/' , getAllArticles)

// get article by id
newsRoute.get('/:id' , getArticleById)

// search articles by category
newsRoute.get('/search/category' , searchArticlesByCategory )

newsRoute.get( '/search/tags' , searchArticlesByTags )


module.exports = newsRoute;