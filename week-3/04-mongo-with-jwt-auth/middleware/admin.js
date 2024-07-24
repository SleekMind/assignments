const jwt = require("jsonwebtoken");
const secret = require("../config"); // Importing the secret
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    // Bearer Jwt
    // get back the 
    const words = token.split(" ");
    const jwtToekn = words[1];

    try {
        jwt.verify(jwtToekn, secret.JWT_SECRET);
        next();
    }
    catch (err) {
        res.status(404).json({
            msg: "Not a Authorized User",
        })
    }
}

module.exports = adminMiddleware;