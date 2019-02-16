import { takeLatest, call, put } from 'redux-saga/effects'
import { request } from '../api/api-service'
import { actionTypes } from '../actions/register-actions'


const loginRequest = (credentials,callback) =>{
    fetch('https://reqres.in/api/login',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email:credentials.email,
            password:credentials.password
        })
    }).then((response)=>{
        callback(response, true)
    }).catch((error)=>{
        callback(error, false)
    })
}

function* login({credentials, callback}){
    try {
        yield call(request,'https://reqres.in/api/login',{method:'POST', payload:{email:credentials.email,password:credentials.password}},callback)
        
        yield put({type: actionTypes.LOGIN_SUCCESS})    
    }
    catch(error){
        console.log(error)
        yield put({type:actionTypes.LOGIN_FAILURE})
    }
    
}

export function* watchRegister(){
    yield takeLatest("LOGIN_REQUEST",login)
}
