import { actionTypes } from '../actions/users-actions'

const initialState = {
    usersList : [],
    user: undefined,
    fetchUsersListError: false,
    fetchUserError: false
}

export const usersReducer = (state = initialState, action) => {
    console.log(action)
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
        case actionTypes.DELETE_USER_SUCCESS:
            let usersList = state.usersList.filter((user) =>  user.id!== action.userId )
            return {
                ...state,
                    usersList:usersList
            }
        case actionTypes.UPDATE_USER_SUCCESS:
            usersList = state.usersList.map((user) => {
                if (user.id === action.credentials.id){
                    return {
                        ...user,
                        ...action.credentials
                    };
                }else{
                    return user
                }
            })
            return {
                ...state,
                    usersList:usersList
            }
        
        case actionTypes.ADD_USER_SUCCESS:
            const id = state.usersList.length + 1
            const user = {
                id: id,
                first_name: action.credentials.first_name,
                last_name: action.credentials.last_name 
            }
            usersList = [...state.usersList,user]
            return {
                ...state,
                usersList: usersList
            }
        default: return state
            
    }
}