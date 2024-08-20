const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized access! Missing token" });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({ message: "Unauthorized access! Invalid token format" });
    }

    const token = parts[1];
    const decoded = jwt.verify(token, process.env.SECRET_CODE);
    req.currentUserId = decoded.userId;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({
      message: "Unauthorized access! Invalid token",
      isTokenInValid: true,
    });
  }
};

module.exports = verifyToken;
