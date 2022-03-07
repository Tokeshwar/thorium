let UserModel=require("../models/userModel")
let ProductModel= require("../models/productModel")
const middlware1= async function (req, res, next) {
    
let contentTypeHeader = req.headers["isfreeappuser"]

console.log(contentTypeHeader)
      if(!contentTypeHeader){
      console.log(" request missing a mandatory header")
      return  res.send("error")
      }
    
  next();
}


const middlware2= async function (req, res, next) {
    let userId=req.body.userId
    let productId= req.body.productId
    let user= await UserModel.findOne({_id:userId})
    let product= await ProductModel.findOne({_id:productId})
    if(!user){
     console.log(" user not present")
     return res.send(" user not present")
    }
    if(!product){
        console.log(" product not present")
        return res.send(" product not present")
       }
  
next();

}
  module.exports.middleware1= middlware1
  module.exports.middleware2= middlware2