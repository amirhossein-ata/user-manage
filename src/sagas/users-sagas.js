import { takeLatest, call, put } from 'redux-saga/effects'
import { request } from '../api/api-service'
import { actionTypes } from '../actions/users-actions'



  
function* getUsersList({callback}){
    try {
        const data = yield call(request,'https://reqres.in/api/users?page=1',{method: 'GET'})
        const users = yield data.data
        yield put({type:actionTypes.GET_USERS_LIST_SUCCESS,users})        
    }
    catch(error){
        console.log(error)
        // yield put({type:actionTypes.LOGIN_FAILURE})
    }
    
}

export function* usersWatcher(){
    yield takeLatest("GET_USERS_LIST",getUsersList)
}
