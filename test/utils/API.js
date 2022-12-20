import got from 'got';

class Api {
    constructor(prefixUrl);
    client = got.extend({
        prefixUrl,
        responseType : 'json'
    });
}

getAuthToken({ email,password })
{
    return this.client.post
    (
        '/users/login',
        {
            json: 
            { 
                user: {email,password}
            }
        }
        .then((response)=>response.body.user.token)
    )
}

module.exports = Api;