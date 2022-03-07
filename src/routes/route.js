// const express = require('express');
// const router = express.Router();
// const UserController= require("../controllers/userController")
// const productController= require("../controllers/productController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser)
// router.post("/createProduct", productController.newProduct)

// module.exports = router

const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const ProductController= require("../controllers/productController")
const MiddleWare=require("../middleware/routeMiddleware")


router.post("/createProduct", ProductController.createProduct  )
router.post("/createUser",MiddleWare.middleware1, UserController.createUser  )
router.post("/createOrder", MiddleWare.middleware1,MiddleWare.middleware2,OrderController.createOrder  )

module.exports = router;