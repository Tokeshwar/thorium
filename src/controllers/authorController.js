// const jwt = require("jsonwebtoken")
const authorModel = require("../model/authorModel");

const createAuthor =async function(req,res){
    try{    let data = req.body;
        let savedData = await authorModel.create(data);
        res.status(201).send({ msg: savedData }); 
    }catch(error){
           console.log(error)
           res.status(400).send({msg: error.message})
    }}
   

module.exports.createAuthor = createAuthor;
