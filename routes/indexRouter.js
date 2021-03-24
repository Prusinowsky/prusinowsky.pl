const express = require('express')
const router = express.Router();

router.use(express.static('public'))

/**
 * Add general data like Website Title
 */
router.use((req, res, next) => {
    res.locals.title = "Prusinowsky"
    next()
})

module.exports = router
