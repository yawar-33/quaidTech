const { createUser, createCount, getUserDetail } = require('../controller/user')
module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.status(200).send({
      data: 'Test route',
    })
  })

  app.post('/api/user/register', createUser) // register User
  app.post('/api/country/create', createCount)

  app.get('/api/user/getDetail/:id', getUserDetail) //find User by ID
}
