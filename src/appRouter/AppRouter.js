import React from 'react';
import {Router,Route , Switch , Link , NavLink} from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import Dashboard from '../components/dashboard'
import history from '../history'

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={RegisterForm} exact={true}/>
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
    </Router>    
);

export default AppRouter ;