var queryString = require ('query-string');

var url = 'http://localhost:8080/';
var header = new Headers({
    'Content-Type': 'application/json; charset=utf8'
});

var AccountService = new function(){

    this.login = (credentials) => {
        return fetch(url + 'login', {
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


    this.postUser = (usernameIN, emailIN, passwordIN) => {
      return fetch(url + 'korisnik/kreiraj', {
        method: 'POST',
        headers: header,
        body: JSON.stringify({
          username: usernameIN,
          email: emailIN,
          password: passwordIN
        })
      });
    }
}

export default AccountService;

