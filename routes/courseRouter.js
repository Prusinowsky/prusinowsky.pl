const express = require('express')
const {offerView, courseView} = require('../controllers/courseController')
const router = express.Router();

router.get('/oferta', offerView)
router.get('/korepetycje', courseView)

module.exports = router
