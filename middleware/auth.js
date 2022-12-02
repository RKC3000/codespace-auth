const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // grab token from cookie
  console.log(req.cookies);
  // const token = req.cookies.token --> we can destructurize it
  const { token } = req.cookies;

  // if no token, stop there
  if (!token) {
    res.status(403).send("PLease login first");
  }

  // decode that token and get id
  try {
    const decode = jwt.verify(token, "shhhh");
    console.log(decode);
    req.user = decode;
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid token");
  }
  // query to DB for that user id

  return next();
};

module.exports = auth;
