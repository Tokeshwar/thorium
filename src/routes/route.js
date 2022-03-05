const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")

const controller = require("../controllers/controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/first-Test", controller.firsttest)
router.get("/second-Test", controller.secondtest)
router.get("/third-Test", controller.thirdtest)
router.get("/fourth-Test", controller.fourthtest)

module.exports = router;













// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

//module.exports = router;