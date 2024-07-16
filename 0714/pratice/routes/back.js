const express = require('express')
const controller = require('../controller/back')
const router = express.Router();

router.post('/signup',controller.signup)

router.post('/login', controller.login)

router.get('/info/:id',controller.info)

router.patch('/update',controller.update)

router.delete('/delete', controller.deleteFunc)
module.exports = router;