const JWT = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

module.exports = async (req, res, next) => {
   try {
      const token = req.headers["authorization"].split(" ")[1];
      JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
         if (err) {
            return res.status(StatusCodes.UNAUTHORIZED).send({
               message: "Auth Failed",
               success: false,
            });
         } else {
            req.body.userId = decode.id;
            next();
         }
      });
   } catch (error) {
      console.log(error);
      res.status(401).send({ message: "Auth failed", success: false });
   }
};
