import Api from '../utils/API.js'

(
    async() => 
    {
        const api = new Api('http://localhost:3000/api/');
        const token = await api.getAuthToken({
            email: 'zuki.sfo@gmail.com',
            password: 'wdiopass'
    });
    console.log(token);
    
});
    