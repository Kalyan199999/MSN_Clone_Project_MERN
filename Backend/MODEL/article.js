const mongoose = require('mongoose');

// File Information
const fileInfo  = require('./imageInfo')

// comments schema
const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  text: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { _id: false });


// The main news article schema
const articleSchema = new mongoose.Schema({

    // Headline/title of the news article
  title: {
    type: String,
    required: [true, "Article title is required"],
    trim: true,
    maxlength: 500,
  },

  // Short preview/summary
  summary: {
    type: String,
    maxlength: 500,
  },

  // Full body/content of the article
  content: {
    type: String,
    required: [true, "Article content is required"],
    minlength: [50, "Article content must be at least 50 characters"],
  },

//   Category (e.g., Business, Sports, Politics, etc.)
category: [{
  type: String,
  enum: ['Politics', 'Business', 'Technology', 'Sports', 'Entertainment', 'Health', 'Other'],
  default: 'Other',
}],

//   Keywords for filtering/searching
  tags: {
    type: [String],
    default: []
  },

  	// Name of a User document that created the article
  author: {
    type: [],
    required: [true, "Author is required"]
  },

//   (Optional) External source or agency name
  source: {
    type: String,
    default: "Mint"
  },

  	// fileInfo object 
  coverImage: {
    type: fileInfo,
    required: false,
  },

	// Track how many times the article was viewed
  views: {
    type: Number,
    default: 0
  },

//   Number of likes
  likes: {
    type: Number,
    default: 0
  },

//    List of comments on the article
  comments: {
    type: [commentSchema],
    default: []
  },
 
//   When it was published
  publishedAt: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;