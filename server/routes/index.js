const Router = require('express')
const router = new Router
const Employees = require('./Employees')
const user = require('./user')

router.use('/Employees', Employees)
router.use('/user', user)

module.exports = router;