var baseUrl = 'http://localhost:8080';

var AccountService = new function () {

    this.login = (credentials) => {
        return fetch(baseUrl + '/login', {
            method: "POST",
            headers: new Headers({
                'Content-Type' : 'application/json'
            }),
            body: JSON.stringify({
                username: credentials.username,
                password : credentials.password
            })//.then(response => {

            // }).catch(error => {

            // })
        });
    }
    
}

export default AccountService;