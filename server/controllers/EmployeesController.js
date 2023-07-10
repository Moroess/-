const {Employees} = require('../models/models')
const ApiError = require('../error/ApiError')

class EmployeesController {
    async create(req, res) {
        const {Name, Salary , IndividualNorm, IsActive, IsIndividual } = req.body
        const employees = await Employees.create({Name, Salary , IndividualNorm, IsActive, IsIndividual} )
        return res.json(employees)
    }

    async getAll(req, res) {
        //const {Name, Salary , IndividualNorm, IsActive, IsIndividual } = req.body
        const employees = await Employees.findAll()
        return res.json(employees)
    }

}

module.exports = new EmployeesController()
