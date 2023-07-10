const sequelize = require('../db')
const {Sequelize} = require('sequelize')

const Employees = sequelize.define('Employee', {
    id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: Sequelize.STRING},
    Salary:{type: Sequelize.INTEGER},
    IndividualNorm:{type: Sequelize.INTEGER},
    IsActive:{type: Sequelize.INTEGER},
    IsIndividual:{type: Sequelize.INTEGER}
})


const User = sequelize.define('user', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: Sequelize.STRING, unique: true,},
    password: {type: Sequelize.STRING},
    role: {type: Sequelize.STRING, defaultValue: "USER"},
})



module.exports = {
    Employees,
    User
}