const API_BASE_URL = 'https://reqres.in/api'

export const  publicApiRequest = (endpoint, options, callback) => {
    const url = `${API_BASE_URL}/${endpoint}`;
    fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(async data => {
            switch (data.status) {
            case 404: {
                // Not found
                console.log('Error', 'Not found');
                throw await data.json();
            }
            case 204: {
                // No content in data.json()
                console.log('Success', 'No content response');
                callback({}, true);
                return;
            }
            case 400: {
                console.log('Error', 'Bad request');
                throw await data.json();
            }
            default: {
                return data.json();
            }
            }
        })
        .then(json => {
            if (json === undefined) {
                // If response status code == 204
                return;
            }
            console.log('Success', json);
            // callback(json.data, true);
            return json.data
        })
        .catch(error => {
            console.log('Error', error);
            callback(error, false);
        });
}

export const privateApiRequest = (endpoint, options, token, callback) => {
    const url = `${API_BASE_URL}/${endpoint}`;
    fetch(url, {
        ...options,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(async data => {
            switch (data.status) {
            case 400: {
                // Bad request
                console.log('Error', 'Bad Request');
                throw await data.json();
            }
            case 401: {
                // Authorization failed
                console.log('Error', 'Authorization failed');
                throw await data.json();
                // TODO Goto signin screen
            }
            case 404: {
                // Not found
                console.log('Error', 'Not found');
                throw await data.json();
            }
            case 204: {
                // No content in data.json()
                console.log('Success', 'No content response');
                callback({}, true);
                return;
            }
            default: {
                return data.json();
            }
            }
        })
        .then(json => {
            if (json === undefined) {
                // If response status code == 204
                return;
            }
            console.log('Success', json);
            callback(json, true);
        })
        .catch(error => {
            console.log('Error', error);
            // console.log('Json', json);
            callback(error, false);
        });
}

export function request(url: string, options: Object = {}): Promise<*> {
    const config = {
      method: options.method,
      ...options,
    };
    const errors = [];
  
    if (!url) {
      errors.push('url');
    }
  
    if (
      !config.payload &&
      (config.method !== 'GET' && config.method !== 'DELETE')
    ) {
      errors.push('payload');
    }
  
    if (errors.length) {
      throw new Error(`Error! You must pass \`${errors.join('`, `')}\``);
    }
  
  
  
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers,
    };
  
    const params: Object = {
      headers,
      method: config.method,
    };
  
    if (params.method !== 'GET') {
      params.body = JSON.stringify(config.payload);
    }
  
    return fetch(url, params).then(async response => {
      if (response.status > 299) {
        const error: ServerError = new ServerError(response.statusText);
        const contentType = response.headers.get('content-type');
  
        if (contentType && contentType.includes('application/json')) {
          error.response = {
            status: response.status,
            data: await response.json(),
          };
        } else {
          error.response = {
            status: response.status,
            data: await response.text(),
          };
        }
  
        throw error;
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        }
  
        return response.text();
      }
    });
  }