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