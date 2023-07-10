import {useContext, useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {createEmployee, fetchEmployee} from "../../http/employeeAPI";
import {Context} from "../../index";

const CreateEmployee = ({show, onHide}) => {
    const {rab} = useContext(Context)
    const [value, setValue] = useState('')
    const [valueS, setValueS] = useState(0)
    const [valueIS, setValueIS] = useState(0)
    const [valueISA, setValueISA] = useState(0)
    const [valueIND, setValueIND] = useState(0)
     useEffect(()=>{
         fetchEmployee().then(data => rab.setEmployees(data))
    },[])

    const addEmployee = () => {
        createEmployee({Name: value,Salary: valueS, IndividualNorm: valueIND,IsActive: valueISA,IsIndividual: valueIS}).then(data => {
            setValue('')
            setValueS(0)
            setValueIS(0)
            setValueISA(0)
            setValueIND(0)
            onHide()
        })}


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить работника
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <label> Введите рабочего: </label>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <label> Введите заработную плату: </label>
                    <Form.Control
                        value = {valueS}
                        onChange={e=> setValueS(Number(e.target.value))}
                        placeholder={"Введите часы"}
                    />
                    <label> Введите индивидуальную норму: </label>
                    <Form.Control
                        value = {valueIND}
                        onChange={e=> setValueIND(Number(e.target.value))}

                        placeholder={"Введите индивидуальную норму"}
                    />
                    <label> Введите количество часов по-факту: </label>
                    <Form.Control
                        value = {valueISA}
                        onChange={e=> setValueISA(Number(e.target.value))}
                        placeholder={"Введите количество часов по-факту"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addEmployee}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateEmployee;