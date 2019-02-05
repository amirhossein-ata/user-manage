import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/register-actions'
import {Menu} from 'semantic-ui-react'

class Navbar extends React.Component{

    onLogout = () => {
        localStorage.removeItem('token')
        this.props.logout()
    }
    render(){
        return(
            <Menu fluid size="large">
                <Menu.Item
                onClick={this.onLogout}
                >
                    خروج
                </Menu.Item>
            
            </Menu>
        
        )
    }
}

const mapStateToProps = (state) => {
    return{
        register : state.registerReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout : () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)