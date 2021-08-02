const User = require('../models').Users
const Countries = require('../models').Countries

const { sign } = require('jsonwebtoken')

module.exports = {
  async createUser(req, res) {
    try {
      const userCollection = await User.create({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        countryId: req.body.countryId,
      })

      if (userCollection) {
        const jsontoken = sign({ userCollection: userCollection }, 'qwe1234', {
          expiresIn: '24h',
        })
        res
          .status(200)
          .send({ jsontoken: jsontoken, userCollection: userCollection })
      } else {
        res.status(404).send('Something Went Wrong')
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },

  async createCount(req, res) {
    console.log(req.body)
    try {
      const countCollection = await Countries.create({
        fullName: req.body.fullName,
      })

      if (countCollection) {
        res.status(200).send({ countCollection: countCollection })
      } else {
        res.status(404).send('Something Went Wrong')
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },

  async getUserDetail(req, res) {
    console.log(req.params.id)
    try {
      const userData = await User.findOne({
        where: {
          id: req.params.id,
        },
      })
      if (userData) {
        res.status(200).send({ userData: userData })
      } else {
        let message = 'No Record Found'
        res.status(400).send({ message: message })
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },
}
