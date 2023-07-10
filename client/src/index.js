import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EmployeeStore from "./store/EmployeeStore";
import UserStore from "./store/userStore";


export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{
        rab: new EmployeeStore(),
        user: new UserStore()
    }}>
    <App />
    </Context.Provider>
)