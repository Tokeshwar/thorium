const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

 router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createPublisher",publisherController.createPublisher)
router.get("/createPublisher", publisherController.getnewPublisher)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.put("/increaseSale", bookController.increaseSale)

router.put("/putBook", bookController.putBook)

module.exports = router;


// { 
//     "name":"Irom Man",
//    "author":"621f625f91b256be925f7242",
//    "price":600,
//    "ratings":4.9,
//    "publisher": "621fa9ef47f33e766dff98c5"
//    }