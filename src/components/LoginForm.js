import React from 'react'
import {login} from '../actions/register-actions'
import { get_users_list } from '../actions/users-actions'
import {connect} from 'react-redux'
import { Row, Col} from 'antd'
import RawForm,{Raw_Form} from './form'

class Login extends React.Component{
    state={
        credentials:{
            password:'',
            email:'',
        },
        loginError:false,
        loginSuccess:false
      }

    onSubmit = () => {
        this.props.login(this.state.credentials , (response , status) => {
            if(status){
                this.onLoginSuccess()
            }else{
                this.onLoginFailure()
            }
        } )
    }
    
    handle_change= (inputName, input) => {
        let credentials = this.state.credentials;
        credentials[inputName] = input
        this.setState(() => ({credentials : credentials}))    
    }
    
    onLoginFailure = () => {
        this.setState(() => ({loginError: true, loginSuccess: false}))
    }

    onLoginSuccess = () => {
        this.props.getUsersList((response, status) => {
            console.log(response)
        })
        this.setState(() => ({loginSuccess: true, loginError: false}))
     
    }
    render(){
        
        return(
            <div>
                <Row>
                    <Col span="12" offset="6" >
                        <h3 style={{float:'right'}}>
                            فرم ورود
                        </h3>

                        <Raw_Form 
                            onSubmit = {this.onSubmit}
                            email = {this.state.credentials.email}
                            password = {this.state.credentials.password}
                            onChange = {this.handle_change}
                        />               
                    </Col>    
                </Row>
            </div>
            
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        login : (credentials, callback) => dispatch({type:"LOGIN_REQUEST",credentials:credentials,callback:callback}),
        getUsersList : (callback) => dispatch({type:"GET_USERS_LIST",callback:callback}),

    }
}
export default connect(undefined,mapDispatchToProps)(Login)