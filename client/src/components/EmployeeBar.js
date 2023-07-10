import {Context} from "../index";
import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit"
import"../begin.css"

const EmployeeBar = observer(()=>{
    const {rab} = useContext(Context)
        return (

            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Имя</th>
                        <th scope='col'>Отработал</th>
                        <th scope='col'>Норма</th>
                        <th scope='col'>Заработная плата</th>
                        <th scope='col'>FTE</th>
                        <th scope='col'>Получившаяся заработная плата</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        rab.Employees.map(employee =>
                    <tr>
                        <td>
                            <p key = {employee.id}>{employee.Name}</p>
                        </td>

                        <td>
                                <p key = {employee.id}>{employee.IsActive}</p>
                        </td>

                        <td>
                                <p key = {employee.id}>{employee.IndividualNorm}</p>
                        </td>

                        <td>
                                <p key = {employee.id}>{employee.Salary}</p>
                        </td>
                        <td>
                            <p key = {employee.id}>{(employee.IsActive/employee.IndividualNorm).toFixed(2)}</p>
                        </td>
                        <td>
                            <p key = {employee.id}>{(employee.Salary*(employee.IsActive/employee.IndividualNorm)).toFixed(2)}</p>
                        </td>
                    </tr>
                        )}


                </MDBTableBody>
            </MDBTable>
        );
    });
    export default EmployeeBar;