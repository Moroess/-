import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {LOGIN_ROUTE, MAIN_ROUTE, RESULT_ROUTE} from "../utils/consts";
import {useNavigate} from 'react-router-dom'
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const history = useNavigate()
    const {user} = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <NavLink to={RESULT_ROUTE}>Diplom</NavLink>

                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(RESULT_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            <Nav className="ml-auto">
                <NavLink href="begin">Home</NavLink>
                <NavLink href="Main">Add</NavLink>
            </Nav>
        </Navbar>
    );
});

export default NavBar;
