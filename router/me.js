const express = require('express');
const router = express.Router()
const meController = require('..//app/controller/MeController')
const postController = require('..//app/controller/PostController')

router.get('/infomation', meController.infomation)
router.get('/mypost', postController.myPosts)

module.exports = router