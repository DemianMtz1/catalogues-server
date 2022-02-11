const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../configs/db.config");

function sign(payload) {
  return jwt.sign(payload, jwt_secret, { expiresIn: "6d" });
}

function verify(token) {
  return jwt.verify(token, jwt_secret);
}

module.exports = {
  ...jwt,
  sign,
  verify,
};
