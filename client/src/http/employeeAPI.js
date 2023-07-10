import {$host} from "./index";
export const createEmployee = async (employee) => {
    const {data} = await $host.post('api/Employees', employee)
    return data
}


export const fetchEmployee = async () => {
    const {data} = await $host.get('api/Employees')
    return data
}