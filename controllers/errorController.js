/**
 * 404 Not Found View
 */
const NotFoundView = (req, res, next) => {
  res.status(404).render('errors/404')
}

module.exports = {
  NotFoundView
}