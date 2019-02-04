import {combineReducers} from 'redux'
import { registerReducer } from './register-reducer'
import { usersReducer } from './users-reducer'
const rootReducer = combineReducers({
    registerReducer,
    usersReducer    
})

export default rootReducer;