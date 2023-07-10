const Router = require('express')
const router = new Router
const EmployeesController = require('../controllers/EmployeesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', EmployeesController.create)
router.get('/', EmployeesController.getAll)

module.exports = router
