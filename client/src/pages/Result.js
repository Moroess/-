import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {fetchEmployee} from "../http/employeeAPI";
import {Container, Row} from "react-bootstrap";
import EmployeeBar from "../components/EmployeeBar";
import {observer} from "mobx-react-lite";
import '../begin.css'

const Result = observer(() => {
    const {rab} = useContext(Context)
    useEffect(()=>{
        fetchEmployee().then(data => rab.setEmployees(data))
    },[])

    return (
        <div className={"hero"}>
        <Container>
            <h1 align="center">Сотрудники</h1>
            <Row className="mt-2">
                    <EmployeeBar />
            </Row>
        </Container>
        </div>
    );
});

export default Result;