const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {
    const user = req.body
  
    const takenUserName = await User.findOne({ username: user.username })
    const takenEmail = await User.findOne({ email: user.email })
  
    if (takenEmail) {
      res.json({msg: 'Почта уже занята'})
    } else if (takenUserName) {
      res.json({msg: 'Имя пользователя уже занято'})
    } else {
      user.password = await bcrypt.hash(req.body.password, 10)
  
      const dbUser = new User({
        username: user.username.toLowerCase(),
        email: user.email.toLowerCase(),
        password: user.password
      })
  
      dbUser.save()
      res.json({msg: `Пользователь ${user.username} успешно создан`})
    }
  })

  module.exports = router