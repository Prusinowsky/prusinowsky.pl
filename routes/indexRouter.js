const express = require('express')
const router = express.Router();

/**
 * Add general data like Website Title
 */
router.use((req, res, next) => {
    res.locals.title = "Prusinowsky"
    next()
})

module.exports = router
