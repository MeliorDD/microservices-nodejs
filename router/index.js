const express = require('express');
const router = express.Router()
const usersService = require('./usersService.js')

router.use((req, res, next) => {
    console.log("Вызван: ", req.path)
    next()
})

router.use(usersService)

module.exports = router
