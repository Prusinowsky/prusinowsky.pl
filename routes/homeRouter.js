const express = require('express')
const {homeView, projectsView, aboutView, contactView} = require('../controllers/homeController')
const router = express.Router();


router.get('/', homeView)
router.get('/welcome', homeView)
router.get('/projects', projectsView)
router.get('/about', aboutView)
router.get('/contact', contactView)

module.exports = router
