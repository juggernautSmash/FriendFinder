module.exports = app => {
  require('./apiRoutes.js')(app),
  require('./htmlRoutes.js')(app)

}