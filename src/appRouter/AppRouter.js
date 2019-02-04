import React from 'react';
import {BrowserRouter,Route , Switch , Link , NavLink} from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={RegisterForm} exact={true}/>
            </Switch>
        </div>
    </BrowserRouter>    
);

export default AppRouter ;