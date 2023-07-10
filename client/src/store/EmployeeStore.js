import {makeAutoObservable} from "mobx";

export default class EmployeeStore{
    constructor() {
        this._employees = []
        this._productioncalendar = [

        ]
        this._weekends =[]
        this._worktable = []
        makeAutoObservable(this)
    }

    setEmployees(employees){
        this._employees = employees
    }

    get Employees(){
        return this._employees
    }


}