const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const { json } = require('body-parser');


router.post('/register', async (req, res) => {
  const user = req.body

  const takenUserName = await User.findOne({ username: user.username })
  const takenEmail = await User.findOne({ email: user.email })

  if (takenEmail) {
    res.json({ msg: 'Почта уже занята' })
  } else if (takenUserName) {
    res.json({ msg: 'Имя пользователя уже занято' })
  } else {
    user.password = await bcrypt.hash(req.body.password, 10)

    const dbUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password
    })

    dbUser.save()
    res.json({ msg: `Пользователь ${user.username} успешно создан` })
  }
})

router.post('/login', (req, res) => {

  const UserLoggingIn = req.body

  User.findOne({ username: UserLoggingIn.username })
    .then(dbUser => {
      if (!dbUser) {
        return res.json({ msg: 'пользователь не найден' })
      }
      bcrypt.compare(UserLoggingIn.password, dbUser.password)
        .then(isCorrect => {
          if (isCorrect) {
            const payload = {
              id: dbUser.id,
              username: dbUser.username
            }
            jwt.sign(
              payload,
              'black',
              { expiresIn: 86400 },
              (err, token) => {
                if (err) {
                  return res.json({
                    msg: 'ошибка какая-то',
                    err: err,
                  })
                }
                return res.json({
                  msg: 'успешный вход',
                  token: 'Bearer ' + token
                })
              }
            )
          } else {
            return res.json({ msg: 'неверный пароль' })
          }
        })
    })
})

module.exports = router