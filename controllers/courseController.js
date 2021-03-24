
/**
 * Offer View 
 */
 const offerView = (req, res, next) => {
    res.render('offer')
}

/**
 * Contact View 
 */
 const courseView = (req, res, next) => {
    res.render('course')
}

module.exports = {
    offerView,
    courseView
}