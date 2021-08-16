const express = require('express');
const router = express.Router()
const billController = require('../app/controller/billController')
const multer = require('multer')
const upload = multer({ dest: 'public/image/post' })
const verifyMiddleware = require('..//app/middlewarse/verifyToken')
const softMiddleware = require('../app/middlewarse/softMiddlewarse')
router.post('/store', upload.single('image'), verifyMiddleware, billController.store)
router.get('/bills', softMiddleware, billController.bills)
router.get('/getimage/:key', billController.getImage)
module.exports = router
