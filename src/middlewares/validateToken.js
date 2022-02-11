const jwt = require("../lib/jwt");

async function isAuth(req, res, next) {
  const { authorization: token } = req.headers;
  if (!token) {
    res.status(400).json({
      success: false,
      message: "Token must be provided",
      data: null,
    });
    return;
  }
  const isValidToken = await jwt.verify(token);
  if (!isValidToken) {
    res.status(400).json({
      success: false,
      message: "User no auth",
      data: null,
    });
    return;
  }

  next();
}

module.exports = isAuth;
