const htmlRoutes = require('./routes/htmlRoutes.js')

module.exports = (app) => {

  // GET display the survey page
    app.get('/surveys', (rq, rs) => {
      
    })
    // catch-all route that leads to `home.html` which displays the home page
    app.get('/:i', (rq, re) => {
      //redirect to home
    })
  }