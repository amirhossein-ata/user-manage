import { privateApiRequest } from './api-service'

export const getSingleUser = (token, userId, callback) => {
    const url = `users/${userId}`
    const options = {
        method: 'GET',
    }

    privateApiRequest(url, options, token, callback)
}

export const getUsersList = (token, page, callback) => {
    const url = `users/?page=${page}`
    const options = {
        method: 'GET'
    }

    privateApiRequest(url, options, token, callback)
}