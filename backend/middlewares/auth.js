const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/constants');
const Unauthorized = require('../errors/unauthorized');

const auth = (req, res, next) => {
  const token = req.cookies.authToken;
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Unauthorized('Ошибка токена');
  }
  req.user = payload;
  return next();
};

module.exports = auth;
