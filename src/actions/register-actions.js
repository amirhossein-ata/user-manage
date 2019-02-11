import * as registerApi from '../api/register-api'
import history from '../history'
export const actionTypes = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILURE: 'REGISTER_FAILURE',
    LOGOUT: 'LOGOUT'
}

export const login_success = () => ({
    type: actionTypes.LOGIN_SUCCESS
})

export const login_failure = () => ({
    type: actionTypes.LOGIN_FAILURE
})

export const login = (credentials, callback) => (dispatch) => {
    registerApi.login(credentials, (response, status1) => {
        if(status1){
            localStorage.setItem('token', response.token)
            history.push('/dashboard')
            dispatch(login_success())
        }else{
            dispatch(login_failure())
        }

        callback(response, status1)
    })
}

export const register_success = () => ({
    type: actionTypes.REGISTER_SUCCESS
})

export const register_failure = () => ({
    type: actionTypes.REGISTER_FAILURE
})

export const register = (credentials, callback) => (dispatch) => {
    registerApi.register(credentials, (response, status1) => {
        if(status1){
            localStorage.setItem('token', response.token)
            dispatch(register_success())
            history.push('/dashboard')

        }else{
            dispatch(register_failure())
        }

        callback(response, status1)
    })
}

export const logout = () => ({
    type: actionTypes.LOGOUT
})