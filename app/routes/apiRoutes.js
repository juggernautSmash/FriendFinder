const { Friends, Questions} = require('../data')

module.exports = app => {
  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get(`/api/friends`, (rq, rs) => {
    rs.json(friends)
  })

  // A GET route for getting the questions
  app.get(`/api/questions`, (rq, rs) => {
    rs.json(Questions)
  })
  
  // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post(`/api/friends`, (rq, rs) => {
    getUserScore(rq.body.scores)
      .then( userResult => {
        getAllFriendsScore(Friends)
          .then( response => {
            let userAgainstFriends = response.map( x => Math.abs(x - userResult))
            console.log(userAgainstFriends)
            let friendMatch = Friends[userAgainstFriends.indexOf(Math.min(...userAgainstFriends))]
            rs.send(friendMatch)
          }) // end .then
          .catch( e => console.log(e))
      })
      .catch( e => console.log(e))
  }) // end post

  async function getUserScore ( user ) {
    let score = await new Promise( (resolve, reject) => {
      if(typeof(user) !== 'undefined' || user !== NaN){
        resolve(user.map( x => parseInt(x) ).reduce( (a, b) => a + b ))
      } else {
        reject(new Error(`
        passed value in getUserScore is datatype: ${typeof(user)}
        passed value in getUserScore has value ${JSON.stringify(user)}
        `))
      }
    })
    return score
  }

  async function getAllFriendsScore (usersObject) {
    let usersTotal = []
    await new Promise ( (resolve, reject) => {
      if(usersObject !== null || usersObject !== 'undefined' ){
        resolve( usersObject.forEach( ({ scores }) =>{ usersTotal.push( scores.map( x => parseInt(x) ).reduce( (a, b) => a + b )) }))
      } else{
        reject(new Error(` usersObject is ${usersObject}`))
      }
    })
    return usersTotal
  } // end getAllFriendsScrore
} // end export
