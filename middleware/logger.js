// This middleware logs the request method and URL for every incoming request.
const logger = (req, res, next) => {
  // We log something like: GET /attendance/students
  console.log(`${req.method} ${req.originalUrl}`);
  // next() is essential to pass control to the next middleware or the route handler.
  next();
};

module.exports = logger;
