const express = require("express");
const newsRoute = express.Router();

const verifyToken = require('../MIDDLEWARE/verifyToken')
const { uploadNews } = require('../MULTERHANDLER/uploadNewsImage')

const { getAllArticles, getArticleById,searchArticlesByCategory,searchArticlesByTags,search, uploadArticle, updateArticle, deleteArticle } = require('../CONTROLER/newsControler');

// get all articles
newsRoute.get('/' , getAllArticles)

// get article by id
newsRoute.get('/:id' , getArticleById)

// search by title
newsRoute.get( '/search/title' , search );

// search articles by category
newsRoute.get('/search/category' , searchArticlesByCategory )

// search articles by tags
newsRoute.get( '/search/tags' , searchArticlesByTags )

// post the article
newsRoute.post('/'  , uploadNews.single('news_image') , uploadArticle)

// update the article
newsRoute.put( '/update/:id' , uploadNews.single('news_image') , updateArticle)


// delete the article
newsRoute.delete( '/delete/:id' , deleteArticle )

module.exports = newsRoute; 