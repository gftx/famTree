const Person = require('../models/person')
const router = require('express').Router()


router.route('/persons')
    .get(async (req, res) => {
        const persons = await Person.find()
        res.send({
            persons: persons,
            msg: 'success get'
        })
    })
    .post((req, res) => {
        const person = req.body

        const dbPerson = new Person({
            name: person.name,
            surname: person.surname,
            secondName: person.secondName,
            birthDate: person.birthDate,
            parents: person.parents,
            children: person.children,
        })

        dbPerson.save()
        res.send({
            data: dbPerson,
            msg: `Человек ${dbPerson.name} успешно создан`
        })

    })

module.exports = router