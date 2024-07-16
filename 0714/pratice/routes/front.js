const express = require('express')
const controller = require('../controller/front')
const router = express.Router()


router.get('/', controller.login);

module.exports = router;