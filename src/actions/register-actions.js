import * as registerApi from '../api/register-api'
import history from '../history'
export const actionTypes = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILURE: 'REGISTER_FAILURE'
}

const login_success = () => ({
    type: actionTypes.LOGIN_SUCCESS
})

const login_failure = () => ({
    type: actionTypes.LOGIN_FAILURE
})

export const login = (credentials, callback) => (dispatch) => {
    registerApi.login(credentials, (response, status1) => {
        if(status1){
            localStorage.setItem('token', response.token)
            console.log('user logged in ', localStorage)
            history.push('/dashboard')
            dispatch(login_success())
        }else{
            console.log('loggin failed')
            dispatch(login_failure())
        }

        callback(response, status1)
    })
}

const register_success = () => ({
    type: actionTypes.REGISTER_SUCCESS
})

const register_failure = () => ({
    type: actionTypes.REGISTER_FAILURE
})

export const register = (credentials, callback) => (dispatch) => {
    registerApi.register(credentials, (response, status1) => {
        if(status1){
            localStorage.setItem('token', response.token)
            console.log('user registered ', localStorage)
            dispatch(register_success())
            history.push('/dashboard')

        }else{
            console.log('register failed')
            dispatch(register_failure())
        }

        callback(response, status1)
    })
}