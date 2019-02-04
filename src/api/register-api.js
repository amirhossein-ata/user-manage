import { publicApiRequest,privateApiRequest } from './api-service';

export const register = (credentials, callback) => {
    const url = 'register'
    const data = {
        email: credentials.email,
        password: credentials.password 
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(data)
    }

    publicApiRequest(url, options, callback)
}

export const login = (credentials, callback) => {
    const url = 'login';
    const data = {
        email: credentials.email,
        password: credentials.password 
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(data)
    };
   
    publicApiRequest(url, options, callback);
}

