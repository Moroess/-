import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {publickRoutes, authRoutes} from "../routes";
import {BEGIN_ROUTE, MAIN_ROUTE, RESULT_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route path='*' element={<Navigate to={RESULT_ROUTE}/>}/>
            )}
            {
                publickRoutes.map(({path , Component})=> <Route key = {path} path={path} element={<Component/>} exact/>)
            }
            <Route path='*' element={<Navigate to={BEGIN_ROUTE}/>} />
        </Routes>
    );
});

export default AppRouter;