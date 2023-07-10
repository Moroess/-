import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import CreateEmployee from "../components/modals/CreateEmployee";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchEmployee} from "../http/employeeAPI";
import videoBG from "../vecteezy_business-partnership-coworkers-using-a-tablet-to-chart_21796034_425.MOV";
import '../index.css'

const Main = observer(() => {
    const [employeeVisible, setEmployeeVisible] = useState(false)
    const {rab} = useContext(Context)
    useEffect(()=>{
    fetchEmployee().then(data => rab.setEmployees(data))
    },[])

    return (
         <div className="main">
           <video src={videoBG} autoPlay loop muted />
             <div className="content">
        <Container>
            <h1 align="center">Учет рабочего времени</h1>
            <h2>Чтобы внести данные о работнике нажмите на кнопку ниже</h2>

           {<Button className="mt-10 p-25" variant="success" size="lg" active onClick={() => setEmployeeVisible(true)}>Добавить</Button>}
          {<CreateEmployee show={employeeVisible} onHide={()=>setEmployeeVisible(false)}/>}
        </Container>
    </div>
         </div>
    );


});

export default Main;