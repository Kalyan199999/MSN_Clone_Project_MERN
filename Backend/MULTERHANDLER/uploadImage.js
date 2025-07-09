const multer = require('multer');
const path = require('path');

// Helper to validate file types
const userImageFilter = (req, file, cb) => 
{
  const allowedTypes = /jpeg|jpg|png/;
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  if (allowedTypes.test(ext) && allowedTypes.test(mime)) {
    cb(null, true);
  } 
  else 
  {
    cb(new Error('Only image files are allowed!'), false);
  }
};

// Storage for profile pictures
const userImageStorage = multer.diskStorage({
    
  destination: (req, file, cb) => {
    try {
      cb(null, 'IMAGES/USER')
    } catch (error) {
      console.log("Path not found!");
    }
  },
  filename: (req, file, cb) => {
    try {
      const myfilename = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
      cb(null, myfilename);
    } 
    catch (error) {
      console.log("Error in file name generation");
      
    }
  },
});

// Multer upload instances
const uploadUser = multer({
  storage: userImageStorage,
  fileFilter: userImageFilter,
});

module.exports = { uploadUser };