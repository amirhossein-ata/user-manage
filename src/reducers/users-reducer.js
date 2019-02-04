import { actionTypes } from '../actions/users-actions'

const initialState = {
    usersList : [],
    user: undefined,
    fetchUsersListError: false,
    fetchUserError: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SIGNLE_USER_SUCCESS:
            return {
                ...state,
                    user:action.user
            }
        case actionTypes.GET_SINGLE_USER_FAILURE:
            return {
                ...state,
                    fetchUserError:true
            }
        case actionTypes.GET_USERS_LIST_SUCCESS:
            return {
                ...state,
                    usersList:action.users
            }
        case actionTypes.GET_USERS_LIST_FAILURE:
            return {
                ...state,
                    fetchUsersListError:true
            }
        default: return state
            
    }
}