require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  const tokenKey = process.env.TOKEN_KEY;

  if (!tokenKey) {
    throw new Error(
      "TOKEN_KEY environment variable is not set. Please add TOKEN_KEY to your .env file."
    );
  }

  return jwt.sign({ id }, tokenKey, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
