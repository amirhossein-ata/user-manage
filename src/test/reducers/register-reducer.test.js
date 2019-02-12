import { registerReducer } from '../../reducers/register-reducer'
import { actionTypes } from '../../actions/register-actions'

it('should setup default state', () => {
    const state = registerReducer(undefined, '@@INIT');
    expect(state).toEqual({
        loggedIn: !!localStorage.getItem('token'),
        registerError:'',
        loginError:''
    })
})

it('should login user successfully', () => {
    const initialState = {
        loggedIn: false,
        registerError: '',
        loginError: ''
    }
    const expectedState = {
        loggedIn: true,
        registerError: '',
        loginError: ''
    }
    const action = {
        type: actionTypes.LOGIN_SUCCESS
    }
    const state = registerReducer(initialState,action)
    expect(state).toEqual(expectedState)
})

it('should register user successfully', () => {
    const initialState = {
        loggedIn: false,
        registerError: '',
        loginError: ''
    }
    const expectedState = {
        loggedIn: true,
        registerError: '',
        loginError: ''
    }
    const action = {
        type: actionTypes.REGISTER_SUCCESS
    }
    const state = registerReducer(initialState,action)
    expect(state).toEqual(expectedState)
})

it('should fail on login user', () => {
    const initialState = {
        loggedIn: false,
        registerError: '',
        loginError: ''
    }
    const expectedState = {
        loggedIn: false,
        registerError: '',
        loginError: true
    }
    const action = {
        type: actionTypes.LOGIN_FAILURE
    }
    const state = registerReducer(initialState,action)
    expect(state).toEqual(expectedState)
})

it('should fail on register user', () => {
    const initialState = {
        loggedIn: false,
        registerError: '',
        loginError: ''
    }
    const expectedState = {
        loggedIn: false,
        registerError: true,
        loginError: ''
    }
    const action = {
        type: actionTypes.REGISTER_FAILURE
    }
    const state = registerReducer(initialState,action)
    expect(state).toEqual(expectedState)
})

it('should logout user successfully', () => {
    const initialState = {
        loggedIn: true,
        registerError: '',
        loginError: ''
    }
    const expectedState = {
        loggedIn: false,
        registerError: '',
        loginError: ''
    }
    const action = {
        type: actionTypes.LOGOUT
    }
    const state = registerReducer(initialState,action)
    expect(state).toEqual(expectedState)
})