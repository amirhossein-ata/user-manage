import React from 'react'
import {register} from '../actions/register-actions'
import {connect} from 'react-redux'
import {Grid, Header} from 'semantic-ui-react'
import RawForm from './form'
class Register extends React.Component{
    state={
        credentials:{
            password:'',
            email:'',
        },
        registerError:false,
        registerSuccess:false
      }

    onSubmit = () => {
        this.props.register(this.state.credentials , (response , status) => {
            if(status){
                this.onRegisterSuccess()
            }else{
                this.onRegisterFailure()
            }
        } )
    }
    
    handle_change= (inputName, input) => {
        let credentials = this.state.credentials;
        credentials[inputName] = input
        this.setState(() => ({credentials : credentials}))    
    }
    
    onRegisterFailure = () => {
        this.setState(() => ({ registerError: true, registerSuccess: false}))
    }

    onRegisterSuccess = () => {
        this.setState(() => ({ registerSuccess: true, registerError: false}))
        this.props.getUsersList(this.state.page, (response, status) => {})

    }
    render(){
        
        return(
            <div>
                <Grid centered >
                    <Grid.Column computer={15} tablet={12}  mobile={14} textAlign="right">
                        <Header dividing>
                            فرم ثبت نام
                        </Header>

                        <RawForm 
                            onSubmit = {this.onSubmit}
                            email = {this.state.credentials.email}
                            password = {this.state.credentials.password}
                            onSubmitSuccess = {this.onRegisterSuccess}
                            onSubmitFailure = {this.onRegisterFailure}
                            submitError = {this.state.registerError}
                            submitSuccess = {this.state.registerSuccess}
                            onChange = {this.handle_change}
                        />               
                    </Grid.Column>    
                </Grid>
            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        register : (credentials, callback) => dispatch(register(credentials, callback)),
        getUsersList : (callback) => dispatch({type:"GET_USERS_LIST",callback:callback}),
    }
}
export default connect(undefined,mapDispatchToProps)(Register)