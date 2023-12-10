const express = require('express')
const {homeView, projectsView, aboutView, experienceView, contactView} = require('../controllers/homeController')
const router = express.Router();


router.get('/', homeView)
router.get('/welcome', homeView)
router.get('/experience', experienceView)
router.get('/contact', contactView)

module.exports = router
