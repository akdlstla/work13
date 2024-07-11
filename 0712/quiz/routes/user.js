const express = require('express')
const {main} = require('../controller/user')
const router = express.Router()

router.get ('/', main);