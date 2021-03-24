const express = require('express')
const {NotFoundView} = require('../controllers/errorController')
const router = express.Router();

/**
 * 404 Not Found View
 */
router.get('*', NotFoundView)

module.exports = router
