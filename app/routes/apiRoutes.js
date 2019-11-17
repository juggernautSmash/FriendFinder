const { friends, questions} = require('../data')

module.exports = app => {
  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get(`/api/friends`, (rq, rs) => {
    rs.json(friends)
  })

  // A GET route for getting the questions
  app.get(`/api/questions`, (rq, rs) => {
    rs.json(questions)
  })
  
  // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post(`/api/friends`, (rq, rs) => {
    console.log(rq.body)
  })

}
