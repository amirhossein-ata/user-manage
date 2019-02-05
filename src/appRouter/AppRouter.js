import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import FirstPage from '../components/firstPage'
import Dashboard from '../components/dashboard'
import history from '../history'

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render = {(props) => (
        isAuthenticated === true ? <Component {...props} /> : <Redirect to='/' />
        
        )}
    
    />
)

const LoginRoute = ({component: Component,isAuthenticated ,...rest}) => {

    return(
        <Route {...rest} render = {(props) => (
            isAuthenticated === true ? <Redirect to='/dashboard'/> : <Component {...props} /> 
        )}
        
        
        />
    
    )
}
class AppRouter extends React.Component{
    render(){
        return(
            <Router history={history}>
                <div>
                    <LoginRoute path="/" isAuthenticated={this.props.isAuthenticated} component={FirstPage} exact={true}/>
                    <PrivateRoute isAuthenticated={this.props.isAuthenticated} path="/dashboard" component={Dashboard} />
                </div>
            </Router>    
    
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.registerReducer.loggedIn)
    return{
        isAuthenticated: state.registerReducer.loggedIn
    }
}
export default connect(mapStateToProps)(AppRouter) ;