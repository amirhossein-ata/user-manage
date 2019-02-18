import { actionTypes } from '../actions/register-actions'


let auth = JSON.parse(localStorage.getItem('persist:buzz')).auth;
auth = JSON.parse(auth);
    
const initialState = {
    loggedIn: !!auth.isAuthenticated,
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
        case actionTypes.LOGOUT:
            return {
                ...state,
                    loggedIn:false
            }
        default : return state
    }

}