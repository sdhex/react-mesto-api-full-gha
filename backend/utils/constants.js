const CREATED = 201;
const devSecret = '289182493d0533e506633ff8287c22bcb3ae3825d92273e4f2d9653fa678105f';
const { NODE_ENV = 'production' } = process.env;
const { JWT_SECRET = 'JWT_SECRET' } = process.env;
const { MONGODB = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const { PORT = 3000 } = process.env;

module.exports = {
  CREATED,
  devSecret,
  NODE_ENV,
  JWT_SECRET,
  MONGODB,
  PORT,
};
