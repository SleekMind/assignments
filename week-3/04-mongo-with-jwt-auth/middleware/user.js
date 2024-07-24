const jwt = require("jsonwebtoken");
const secret = require("../index");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    // Bearer Jwt
    // get back the 
    const words = token.split(" ");
    const jwtToekn = words[1];

    try {
        let decode = jwt.verify(jwtToekn, secret);
        req.username = decode.username;
        next();
    }
    catch (err) {
        res.status(404).json({
            msg: "Not a Authorized User",
        })
    }
}

module.exports = userMiddleware;