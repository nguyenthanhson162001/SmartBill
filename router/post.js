const express = require('express');
const router = express.Router()
const postController = require('..//app/controller/PostController')
router.post('/store', postController.store)
router.get('/posts', postController.posts)

module.exports = router
