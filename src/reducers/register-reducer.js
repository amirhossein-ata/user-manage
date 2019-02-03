import { actionTypes } from '../actions/register-actions'

const initialState = {
    loggedIn: !!localStorage.getItem("token"),
    registerError: '',
    loginError: ''
}

export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loggedIn: true 
            }
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                loggedIn:false,
                loginError:true
            }
        case actionTypes.REGISTER_FAILURE:
            return {
                ...state,
                loggedIn:false,
                registerError:true
            }
        default : return state
    }

}