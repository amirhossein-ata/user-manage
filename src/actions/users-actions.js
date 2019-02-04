import * as usersApi from '../api/users-api'

export const actionTypes = {
    GET_SIGNLE_USER_SUCCESS: 'GET_SINGLE_USER_SUCCESS',
    GET_SINGLE_USER_FAILURE: 'GET_SINGLE_USER_FAILURE',
    GET_USERS_LIST_SUCCESS: 'GET_USERS_LIST_SUCCESS',
    GET_USERS_LIST_FAILURE: 'GET_USERS_LIST_FAILURE'
}

const get_single_success = (user) => ({
    type: actionTypes.GET_SIGNLE_USER_SUCCESS,
    user:user
})

const get_single_failure = () => ({
    type: actionTypes.GET_SINGLE_USER_FAILURE
})
export const get_single_user = (userId, callback) => (dispatch) => {
    const token = localStorage.getItem('token')
    usersApi.getSingleUser(token, userId, (response, status1) => {
        if(status1){
            console.log('response from get single user: ',response)
            dispatch(get_single_success(response.data))
        }else{
            console.log('error in single user api')
            dispatch(get_single_failure())
        }

        callback(response, status1)

    })

}

const get_users_list_success = (users) => ({
    type: actionTypes.GET_USERS_LIST_SUCCESS,
    users: users
})

const get_users_list_failure = () => ({
    type: actionTypes.GET_USERS_LIST_FAILURE
})

export const get_users_list = (page, callback) => (dispatch) => {
    const token = localStorage.getItem('token')
    usersApi.getUsersList(token, page, (response, status1) => {
        if(status1){
            console.log('response from get users list: ',response)
            dispatch(get_users_list_success(response.data))
        }else{
            console.log('error in users list api')
            dispatch(get_users_list_failure())
        }

        callback(response, status1)
    })

}