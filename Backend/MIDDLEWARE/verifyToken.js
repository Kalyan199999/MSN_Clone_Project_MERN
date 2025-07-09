const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {

  try 
  {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;

    // Check if token exists and follows "Bearer <token>" format
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        ok: false,
        message: "No token, authorization denied"
      });
    }

    // Extract token part from header
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user data to req.user
    req.user = decoded;

    next(); // proceed to next middleware/controller

  } 
  catch (err) {
    return res.status(401).json({
      ok: false,
      message: "Token is not valid"
    });
  }
};

module.exports = verifyToken;