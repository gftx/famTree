const router = require('express').Router()

router.get('/persons', async (req, res) => {
    res.json({
        persons: [],
        msg: 'success get'
    })
})

router.post('/persons', async (req, res) => {
    res.json({
        data: req,
        msg: 'success req'
    })
})

module.exports = router