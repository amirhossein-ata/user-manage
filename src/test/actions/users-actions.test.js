import {actionTypes, get_single_user,get_users_list, get_users_list_success, get_single_success, get_single_failure, addUser, updateUser, deleteUser, get_users_list_failure } from '../../actions/users-actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('user async actions', () => {
    
    afterEach(() => {
        fetchMock.restore()
    })

    it('should get single user', () => {
        const user = {
            id: 1,
            first_name: 'test_first_name',
            last_name: 'test_last_name'
        }
        fetchMock.getOnce('https://reqres.in/api/users/1', {
          body: { data :user },
          headers: { 'content-type': 'application/json' }
        })
        
        const expectedActions = [{ 
            type: actionTypes.GET_SIGNLE_USER_SUCCESS, user: user 
        }]

        const store = mockStore({ user: undefined })
    
        store.dispatch(get_single_user(1, () => {
            expect(store.getActions()).toEqual(expectedActions)
           
        }))
        
    })

    it('should get a users list', () => {
        const users = [
            {
                id: 1,
                first_name: 'test_first_name1',
                last_name: 'test_last_name1'
            },
            {
                id: 2,
                first_name: 'test_first_name2',
                last_name: 'test_last_name2'
            },
            {
                id: 3,
                first_name: 'test_first_name3',
                last_name: 'test_last_name3'
            }
        ]
        fetchMock.getOnce('https://reqres.in/api/users/?page=1', {
            body: {data: users},
            headers: { 'Content-type': 'application/json'}
        })

        const expectedActions = [
            {type: actionTypes.GET_USERS_LIST_SUCCESS, users: users}
        ]
        const store = mockStore({ users: []})
        store.dispatch(get_users_list(1, () => {
            expect(store.getActions()).toEqual(expectedActions)
        }))
    })
    
})

describe('user action creators', () => {
    
    it('should create action of get single user successfully.', () => {
        const user = {
            id: 1,
            first_name: 'test_first_name',
            last_name: 'test_last_name'
        }
        const action = get_single_success(user)
        
        expect(action).toEqual({
            type: actionTypes.GET_SIGNLE_USER_SUCCESS,
            user: user
        })
    })

    it('should create action of failure on getting a single user.', () => {
        const action = get_single_failure();
    
        expect(action).toEqual({
            type: actionTypes.GET_SINGLE_USER_FAILURE
        })
    })
    
    it('should create aciton of get users list successfully.', () => {
        const users = [
            {
                id: 1,
                first_name: 'test_first_name1',
                last_name: 'test_last_name1'
            },
            {
                id: 2,
                first_name: 'test_first_name2',
                last_name: 'test_last_name2'
            },
            {
                id: 3,
                first_name: 'test_first_name3',
                last_name: 'test_last_name3'
            }
        ]
        const action = get_users_list_success(users)
        expect(action).toEqual({
            type: actionTypes.GET_USERS_LIST_SUCCESS,
            users: users
        })
    })
    
    it('should create aciton of failure on getting users list.', () => {
        const action = get_users_list_failure()
        expect(action).toEqual({
            type: actionTypes.GET_USERS_LIST_FAILURE
        })
    })
    
    it('should create action of add user.', () => {
        const credentials = {
            id: '4',
            first_name: 'add_first_name',
            last_name: 'add_last_name'
        }
        const action = addUser(credentials);
        expect(action).toEqual({
            type: actionTypes.ADD_USER_SUCCESS,
            credentials: credentials
        })
    })
    
    it('should create aciton of update user', () => {
        const credentials = {
            id: '4',
            first_name: 'update_first_name',
            last_name: 'update_last_name'
        }
        const action = updateUser(credentials)
        expect(action).toEqual({
            type: actionTypes.UPDATE_USER_SUCCESS,
            credentials:credentials
        })
    })
    
    it('should create action of delete user', () => {
        const userId = 1
        const action = deleteUser(userId)
        expect(action).toEqual({
            type: actionTypes.DELETE_USER_SUCCESS,
            userId: userId
        })
    })

})

