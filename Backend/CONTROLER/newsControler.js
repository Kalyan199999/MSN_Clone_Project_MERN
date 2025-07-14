const Article = require('../MODEL/article')

// fetche all the articles
// GET /api/news//articles?page=2&limit=5 – 2nd page with 5 articles per page

// GET /api/news/articles?sortBy=views&order=desc – sorted by most viewed

// GET /api/news/articles?sortBy=title&order=asc&page=1&limit=20 – alphabetical list, paginated

const getAllArticles = async (req, res) => {
  try 
  {
    // Extract query params

    const page = parseInt(req.query.page) || 1;

    const limit = parseInt(req.query.limit) || 10;

    const sortBy = req.query.sortBy || 'publishedAt';

    const order = req.query.order === 'asc' ? 1 : -1; // default: desc

    const skip = (page - 1) * limit;

    const articles = await Article.find()
      .sort({ [sortBy]: order })  // dynamic sort field and order
      .skip(skip)
      .limit(limit);

    const total = await Article.countDocuments();

    return res.status(200).json({
      ok: true,
      message: 'Articles fetched successfully!',
      data: articles,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } 
  catch (error) 
  {
    return res.status(500).json({
      ok: false,
      message: 'Articles fetching failed!',
      data: [],
      error: error.message
    });
  }
};


// fetch the specified article
const getArticleById = async (req,res)=>{
    try {
        const article = await Article.findById(req.params.id)

        // article not found
        if( !article )
        {
            return res.status(200).json({
            ok:true,
            message:'Article not found!',
            data:{}
           })
        }

        return res.status(200).json({
            ok:true,
            message:'Article fetched successfully!',
            data:article
        })
    } 
    catch (error) 
    {
        return res.status(500).json(
            {
                ok:false,
                message:'Article fetching by id failed!',
                data:{},
                error:error.message
            }
        )
    }
}

// search articles by category

// http://localhost:5050/api/news/search/category?categories=Business,Politics&page=1&limit=5

const searchArticlesByCategory = async (req,res)=>
{
    try {
    const { categories= ['Business' , 'Sports'] , page = 1, limit = 10 } = req.query;

    const filter = {};

    if (categories) {
      filter.category = { $in: categories.split(',') };
    }

    const articles = await Article.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ publishedAt: -1 });

      if( !articles )
      {
          return res.status(200).json({
              ok:true,
              message:'No articles found!',
              data:[]
          })
      }


    return res.status(200).json({ 
        ok: true, 
        message: 'Articles fetched successfully!',
        data: articles 
    });

  } 
  catch (error) 
  {
    return res.status(500).json({ 
          ok: false,
          message: 'Articles fetching failed!',
          error: error.message 
        });
  }

}


// Search articles by tags (array of strings)
const searchArticlesByTags = async (req, res) => {
  try {
    const { tags, page = 1, limit = 10 } = req.query;

    const limitNum = parseInt(limit);

    const skip = (page - 1) * limitNum;

    const filter = {};

    if (tags) {
      const tagList = tags.split(',');
      filter.tags = { $in: tagList };
    }

    console.log(filter);
    

    const articles = await Article.find(filter)
      .skip(skip)
      .limit(limitNum)
      .sort({ publishedAt: -1 });

    if (articles.length === 0) {
      return res.status(200).json({
        ok: true,
        message: 'No articles found for the given tags!',
        data: []
      });
    }

    return res.status(200).json({
      ok: true,
      message: 'Articles fetched successfully!',
      data: articles
    });

  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Articles fetching failed!',
      error: error.message
    });
  }
};

// Search articles by title (case-insensitive, partial match, with pagination)
// http://localhost:5050/api/news/search/title?title=mahesh babu&page=1&limit=5
const search = async (req, res) => {
  try {
    const { title = '', page = 1, limit = 10 } = req.query;

    const limitNum = parseInt(limit);
    const skip = (page - 1) * limitNum;

    // Case-insensitive regex search
    const regex = new RegExp(title, 'i');

    const filter = {
      title: { $regex: regex }
    };

    // console.log(filter);
    

    const articles = await Article.find(filter)
      .skip(skip)
      .limit(limitNum)
      .sort({ publishedAt: -1 });

    if (articles.length === 0) 
    {
      return res.status(200).json({
        ok: true,
        message: 'No articles found for the given title!',
        data: []
      });
    }

    return res.status(200).json({
      ok: true,
      message: 'Articles fetched successfully!',
      data: articles
    });

  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Articles fetching failed!',
      error: error.message,
      data: []
    });
  }
};


const uploadArticle = async (req, res) => {
  try {
    const { title, summary, content, source } = req.body;

    const category = Array.isArray(req.body.category)
      ? req.body.category
      : req.body.category?.split(",").map((item) => item.trim());

    const tags = Array.isArray(req.body.tags)
      ? req.body.tags
      : req.body.tags?.split(",").map((item) => item.trim());

    const author = Array.isArray(req.body.author)
      ? req.body.author
      : req.body.author?.split(",").map((item) => item.trim());

    const coverImage = req.file || null;

    // Validate required fields
    if (!title || !content || !author?.length) {
      return res.status(400).json({
        ok: false,
        message: "Title, content, and at least one author are required.",
      });
    }

    // Create article object
    const article = new Article({
      title,
      summary,
      content,
      category,
      tags,
      author,
      source,
      coverImage,
    });

    await article.save();
    

    return res.status(200).json({
      ok: true,
      message: "Article uploaded successfully!",
      data: article,
    });
  } 
  catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Article upload failed",
      error: error.message,
    });
  }
};

// update the news article

const updateArticle = async (req, res) => {
  try {
    const articleId = req.params.id;

    // Extract text fields from req.body
    const { title, summary, content, source } = req.body;

    // Ensure arrays come in correctly (handles single string or array)
    const category = Array.isArray(req.body.category)
      ? req.body.category
      : [req.body.category].filter(Boolean);

    const tags = Array.isArray(req.body.tags)
      ? req.body.tags
      : [req.body.tags].filter(Boolean);

    const author = Array.isArray(req.body.author)
      ? req.body.author
      : [req.body.author].filter(Boolean);

    // Build update object
    const updateData = {
      ...(title && { title }),
      ...(summary && { summary }),
      ...(content && { content }),
      ...(source && { source }),
      ...(category.length && { category }),
      ...(tags.length && { tags }),
      ...(author.length && { author }),
    };

    // If a file is uploaded
    if (req.file) {
      updateData.coverImage = req.file
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      articleId,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedArticle) {
      return res.status(404).json({
        ok: false,
        message: 'Article not found!',
      });
    }

    return res.status(200).json({
      ok: true,
      message: 'Article updated successfully!',
      data: updatedArticle,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      message: 'Failed to update article.',
      error: error.message,
    });
  }
};


const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedArticle = await Article.findByIdAndDelete(id);

    if (!deletedArticle) {
      return res.status(404).json({
        ok: false,
        message: "Article not found or already deleted!",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Article deleted successfully!",
      data: deletedArticle,
    });
  } 
  catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Error deleting the article.",
      error: error.message,
    });
  }
};


module.exports = {
    getAllArticles,
    getArticleById,
    searchArticlesByCategory,
    searchArticlesByTags,
    search,
    uploadArticle,
    updateArticle,
    deleteArticle
}