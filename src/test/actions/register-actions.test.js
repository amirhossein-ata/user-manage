import { actionTypes, login, logout, register, login_success, login_failure, register_success, register_failure } from '../../actions/register-actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('register action creaters' , () => {

    it ('should create action of logout user', () => {
        const action = logout();
        expect(action).toEqual({
            type: actionTypes.LOGOUT
        })
    })

    it('should create action of login user successfully', () => {
        const action = login_success();
        expect(action).toEqual({
            type: actionTypes.LOGIN_SUCCESS 
        })
    })

    it('should create action of failure on login', () => {
        const action = login_failure();
        expect(action).toEqual({
            type: actionTypes.LOGIN_FAILURE
        })
    })

    it('should create action of register user successfully', () => {
        const action = register_success();
        expect(action).toEqual({
            type: actionTypes.REGISTER_SUCCESS
        })
    })

    it('should create action of failure on user register', () => {
        const action = register_failure();
        expect(action).toEqual({
            type: actionTypes.REGISTER_FAILURE 
        })
    })
})

describe('register async actions', () => {
    
    afterEach(() => {
        fetchMock.restore()
    })

    it('should login user', () => {
        const token = 'dskgslgaghkjsjdmck[320rhks'
        const credentials = {
            email: 'aa@a.com',
            password: 'pass' 
        }
        fetchMock.postOnce('https://reqres.in/api/login', {
            
            body: {token: token},
            headers: { 'Content-Type': 'application/json' }
        })

        const expectedActions = [
            {type: actionTypes.LOGIN_SUCCESS}
        ]
        const store = mockStore({loggedIn:false})
        store.dispatch(login(credentials, () => {
            expect(store.getActions()).toEqual(expectedActions)
        }))
    })

    it('should register user', () => {
        const token = 'sdksag;kjgdskvmoiew'
        const credentials = {
            email: 'ami@r.com',
            password: 'pass'
        }
        fetchMock.postOnce('https://reqres.in/api/register', {  
            body: {token: token},
            headers: { 'Content-Type': 'application/json' }
        })

        const expectedActions = [
            {type: actionTypes.REGISTER_SUCCESS}
        ]
        const store = mockStore({loggedIn: false})
        store.dispatch(register(credentials, () => {
            expect(store.getActions()).toEqual(expectedActions)
        }))
    })
})