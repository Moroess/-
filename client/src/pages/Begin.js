import React from 'react';
import { Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import videoBG from "../vecteezy_business-partnership-coworkers-using-a-tablet-to-chart_21796034_425.MOV";
import '../begin.css'

const Begin = observer(() => {

    return (
        <div className="main">
            <video src={videoBG} autoPlay loop muted />
            <div className="content">
                <Container>
                    <h1 align="center">Учет рабочего времени</h1>
                    <p>Это веб-приложение предназначено для контрольно-пропускного пункта НИИ Микроприборов им. Г.Я. Гуськова</p>
                </Container>
            </div>
        </div>
    );


});

export default Begin;