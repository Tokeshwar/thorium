const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const authenticate =async function(req, res, next) {
    //check the token in request header
    //validate this token
          let token = req.headers["x-auth-token"];
        //   if (!token) token = req.headers["x-auth-token"];
          if (!token) return res.send({ status: false, msg: "token must be present" });
      
          let decodedToken = jwt.verify(token, "functionup-thorium");
        //   console.log(decodedToken)
          if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
          next()
      }




const authorise = async function(req, res, next) {
    // comapre the logged in user's id and the id in request
        let userToBeModified = req.params.userId
        let token = req.headers["x-auth-token"]
        let decodedToken = jwt.verify(token, "functionup-thorium")
        let userLoggedIn = decodedToken.userId
        if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
        next()
      }
module.exports.authenticate = authenticate;
module.exports.authorise = authorise;