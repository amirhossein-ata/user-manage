import { takeLatest, call, put } from 'redux-saga/effects'
import * as registerApi from '../api/register-api'
import { actionTypes } from '../actions/users-actions'


const getUsersListRequest = (callback) =>{
    const token = localStorage.getItem('token')
    fetch('https://reqres.in/api/users?page=2',{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response=>{
        callback(response,true)
    }).catch((error)=>{
        console.log(error)
        callback(error, false)
    })
}

function* getUsersList({callback}){
    try {
        const data = yield call(getUsersListRequest,callback)
        // /console.log(data)
        yield put({type: actionTypes.GET_USERS_LIST_SUCCESS,users:data})    
    }
    catch(error){
        console.log(error)
        // yield put({type:actionTypes.LOGIN_FAILURE})
    }
    
}

export function* usersWatcher(){
    yield takeLatest("GET_USERS_LIST",getUsersList)
}
