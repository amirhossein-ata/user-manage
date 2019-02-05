import React from 'react'
import {login} from '../actions/register-actions'
import {connect} from 'react-redux'
import {Grid, Header} from 'semantic-ui-react'
import RawForm from './form'

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
        this.setState(() => ({loginSuccess: true, loginError: false}))
    }
    render(){
        
        return(
            <div>
                <Grid centered >
                    <Grid.Column computer={15} tablet={12}  mobile={14} textAlign="right">
                        <Header dividing>
                            فرم ورود
                        </Header>

                        <RawForm 
                            onSubmit = {this.onSubmit}
                            email = {this.state.credentials.email}
                            password = {this.state.credentials.password}
                            onSubmitSuccess = {this.onLoginSuccess}
                            onSubmitFailure = {this.onLoginFailure}
                            submitError = {this.state.loginError}
                            submitSuccess = {this.state.loginSuccess}
                            onChange = {this.handle_change}
                        />               
                    </Grid.Column>    
                </Grid>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    
    return{
        state:state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login : (credentials, callback) => dispatch(login(credentials, callback))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)