const { join } = require('path')

module.exports = (app) => {

  // GET display the survey page
    app.get('/surveys', (rq, rs) => {
      rs.sendFile(join(__dirname, '../public/surveys.html'))
    })
    // catch-all route that leads to `home.html` which displays the home page
    app.get('*', (rq, rs) => {
      //redirect to home
      rs.sendFile(join(__dirname, '../public/home.html'))
    })
  }