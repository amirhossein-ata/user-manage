import * as usersApi from '../api/users-api'

export const actionTypes = {
    GET_SIGNLE_USER_SUCCESS: 'GET_SINGLE_USER_SUCCESS',
    GET_SINGLE_USER_FAILURE: 'GET_SINGLE_USER_FAILURE',
    GET_USERS_LIST_SUCCESS: 'GET_USERS_LIST_SUCCESS',
    GET_USERS_LIST_FAILURE: 'GET_USERS_LIST_FAILURE',
    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS'
}

export const get_single_success = (user) => ({
    type: actionTypes.GET_SIGNLE_USER_SUCCESS,
    user:user
})

export const get_single_failure = () => ({
    type: actionTypes.GET_SINGLE_USER_FAILURE
})

export const get_single_user = (userId, callback) => (dispatch) => {
    const token = localStorage.getItem('token')
    usersApi.getSingleUser(token, userId, (response, status1) => {
        if(status1){
            dispatch(get_single_success(response.data))
        }else{
            dispatch(get_single_failure())
        }

        callback(response, status1)

    })

}

export const get_users_list_success = (users) => ({
    type: actionTypes.GET_USERS_LIST_SUCCESS,
    users: users
})

export const get_users_list_failure = () => ({
    type: actionTypes.GET_USERS_LIST_FAILURE
})

export const get_users_list = (page, callback) => (dispatch) => {
    const token = localStorage.getItem('token')
    usersApi.getUsersList(token, page, (response, status1) => {
        if(status1){
            dispatch(get_users_list_success(response.data))
        }else{
            dispatch(get_users_list_failure())
        }

        callback(response, status1)
    })

}

export const deleteUser = (userId) => ({
    type: actionTypes.DELETE_USER_SUCCESS,
    userId: userId
})

export const updateUser = (credentials) => ({
    type: actionTypes.UPDATE_USER_SUCCESS,
    credentials: credentials
})

export const addUser = (credentials) => ({
    type: actionTypes.ADD_USER_SUCCESS,
    credentials: credentials
})