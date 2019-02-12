import { usersReducer } from '../../reducers/users-reducer'
import { actionTypes } from '../../actions/users-actions'

it('should setup default state', () => {
    const initialState = {
        usersList : [],
        user: undefined,
        fetchUsersListError: false,
        fetchUserError: false
    }
    const state = usersReducer(undefined, '@@INIT');
    expect(state).toEqual(initialState)
})

it('should get a single user successfully', () => {
    const initialState = {
        usersList : [],
        user: undefined,
        fetchUsersListError: false,
        fetchUserError: false
    }
    const action = {
        type: actionTypes.GET_SIGNLE_USER_SUCCESS,
        user:{
            id: 1,
            first_name: 'test',
            last_name: 'test'
        }
    }

    const expectedState = {
        usersList : [],
        user:{
            id: 1,
            first_name: 'test',
            last_name: 'test'
        },
        fetchUsersListError: false,
        fetchUserError: false    
    }
    const state = usersReducer(initialState, action)
    expect(state).toEqual(expectedState)
})

it('should fail on getting a single user', () => {
    const initialState = {
        usersList : [],
        user: undefined,
        fetchUsersListError: false,
        fetchUserError: false
    }
    const action = {
        type: actionTypes.GET_SINGLE_USER_FAILURE,
    }

    const expectedState = {
        usersList : [],
        user:undefined,
        fetchUsersListError: false,
        fetchUserError: true    
    }
    const state = usersReducer(initialState, action)
    expect(state).toEqual(expectedState)
})

it('should get users list successfully', () => {
    const initialState = {
        usersList : [],
        user: undefined,
        fetchUsersListError: false,
        fetchUserError: false
    }
    const action = {
        type: actionTypes.GET_USERS_LIST_SUCCESS,
        users:[
            {
                id: 1,
                first_name: 'test1',
                last_name: 'test1'
            },
            {
                id: 2,
                first_name: 'test2',
                last_name: 'test2'
            },
            {
                id: 3,
                first_name: 'test3',
                last_name: 'test3'
            },
        ]
    }

    const expectedState = {
        usersList : [
            {
                id: 1,
                first_name: 'test1',
                last_name: 'test1'
            },
            {
                id: 2,
                first_name: 'test2',
                last_name: 'test2'
            },
            {
                id: 3,
                first_name: 'test3',
                last_name: 'test3'
            },
        ],
        user:undefined,
        fetchUsersListError: false,
        fetchUserError: false    
    }
    const state = usersReducer(initialState, action)
    expect(state).toEqual(expectedState)
})

it('should fail on geting users list', () => {
    const initialState = {
        usersList : [],
        user: undefined,
        fetchUsersListError: false,
        fetchUserError: false
    }
    const action = {
        type: actionTypes.GET_USERS_LIST_FAILURE,
    }

    const expectedState = {
        usersList : [],
        user:undefined,
        fetchUsersListError: true,
        fetchUserError: false    
    }
    const state = usersReducer(initialState, action)
    expect(state).toEqual(expectedState)  
})

it('should delete user successfully', () => {
    const initialState = {
        usersList : [
            {
                id: 1,
                first_name: 'test1',
                last_name: 'test1'
            },
            {
                id: 2,
                first_name: 'test2',
                last_name: 'test2'
            },
            {
                id: 3,
                first_name: 'test3',
                last_name: 'test3'
            },
        ],
        user: undefined,
        fetchUsersListError: false,
        fetchUserError: false
    }
    const action = {
        type: actionTypes.DELETE_USER_SUCCESS,
        userId:1
    }

    const expectedState = {
        usersList : [
            {
                id: 2,
                first_name: 'test2',
                last_name: 'test2'
            },
            {
                id: 3,
                first_name: 'test3',
                last_name: 'test3'
            },
        ],
        user:undefined,
        fetchUsersListError: false,
        fetchUserError: false   
    }
    const state = usersReducer(initialState, action)
    expect(state).toEqual(expectedState)
})

it('should update user successfully', () => {
    const initialState = {
        usersList : [
            {
                id: 1,
                first_name: 'test1',
                last_name: 'test1'
            },
            {
                id: 2,
                first_name: 'test2',
                last_name: 'test2'
            },
            {
                id: 3,
                first_name: 'test3',
                last_name: 'test3'
            },
        ],
        user: undefined,
        fetchUsersListError: false,
        fetchUserError: false
    }
    const action = {
        type: actionTypes.UPDATE_USER_SUCCESS,
        credentials:{
            id:1,
            first_name:'changed',
            last_name:'changed'
        }
    }

    const expectedState = {
        usersList : [
            {
                id:1,
                first_name:'changed',
                last_name:'changed'
            },
            {
                id: 2,
                first_name: 'test2',
                last_name: 'test2'
            },
            {
                id: 3,
                first_name: 'test3',
                last_name: 'test3'
            },
        ],
        user:undefined,
        fetchUsersListError: false,
        fetchUserError: false   
    }
    const state = usersReducer(initialState, action)
    expect(state).toEqual(expectedState)
})

it('should add user successfully', () => {
    const initialState = {
        usersList : [
            {
                id: 1,
                first_name: 'test1',
                last_name: 'test1'
            },
            {
                id: 2,
                first_name: 'test2',
                last_name: 'test2'
            },
            {
                id: 3,
                first_name: 'test3',
                last_name: 'test3'
            },
        ],
        user: undefined,
        fetchUsersListError: false,
        fetchUserError: false
    }
    const action = {
        type: actionTypes.ADD_USER_SUCCESS,
        credentials:{
            first_name:'added',
            last_name:'added'
        }
    }

    const expectedState = {
        usersList : [
            {
                id:1,
                first_name:'test1',
                last_name:'test1'
            },
            {
                id: 2,
                first_name: 'test2',
                last_name: 'test2'
            },
            {
                id: 3,
                first_name: 'test3',
                last_name: 'test3'
            },
            {
                id: 4,
                first_name: 'added',
                last_name: 'added'
            },
        ],
        user:undefined,
        fetchUsersListError: false,
        fetchUserError: false   
    }
    const state = usersReducer(initialState, action)
    expect(state).toEqual(expectedState)
})