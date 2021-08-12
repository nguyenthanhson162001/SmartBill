const express = require('express');
const router = express.Router()
const meController = require('..//app/controller/MeController')
router.get('/infomation', meController.infomation)

module.exports = router