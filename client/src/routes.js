import {BEGIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import {RESULT_ROUTE} from "./utils/consts";
import Main from "./pages/Main";
import Result from "./pages/Result";
import Auth from "./pages/Auth";
import Begin from "./pages/Begin";
export const authRoutes = [
    // {
    //     path: RESULT_ROUTE,
    //     Component: Result
    // }
]
export const publickRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: RESULT_ROUTE,
        Component: Result
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
    path: BEGIN_ROUTE,
    Component: Begin
    }

]