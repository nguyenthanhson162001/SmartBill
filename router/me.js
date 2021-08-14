const express = require('express');
const router = express.Router()
const meController = require('..//app/controller/MeController')
const postController = require('..//app/controller/PostController')

router.get('/infomation', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
}, meController.infomation)
router.get('/mypost', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
}, postController.myPosts)

module.exports = router