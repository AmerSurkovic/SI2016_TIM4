var queryString = require('query-string');

var url = 'https://immense-chamber-20752.herokuapp.com/';
var header = new Headers({
    'Content-Type': 'application/json; charset=utf8'
});

var AccountService = new function () {

    this.login = (credentials) => {
        return fetch(url + 'login', {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                username: credentials.username,
                password: credentials.password
            })
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
        }).then(function(response){
          if(!response.ok){
            throw Error(response.statusText);
          }
          alert("Uspješno ste se registrovali!");
          window.location = "/";
          return response;
        }).catch(function(){
          alert("Korisničko ime već postoji! Molimo Vas odaberite neko drugo korisničko ime.");
        });
    }

    this.editUser = (usernameIN, emailIN, passwordIN, oldPw) => {

        var headerAuth = {};
        var auth = this.getAuthInfo();
        headerAuth = new Headers({
            'Content-Type': 'application/json; charset=utf8',
            'Authorization': auth.token
        });

        return fetch(url + 'korisnik/update', {
            method: 'POST',
            headers: headerAuth,
            body: JSON.stringify({
                username: usernameIN,
                email: emailIN,
                oldPassword: oldPw,
                password: passwordIN
            })
        });

    }

    this.storeAuthInfo = (auth) => {
        localStorage.setItem('authData', JSON.stringify(auth));
    }

    this.getAuthInfo = () => {
        return JSON.parse(localStorage.getItem('authData') || null);
    }

    this.deleteAuthInfo = () => {
        if (this.getAuthInfo() != null) {
            localStorage.removeItem("authData");
            return true;
        }
        return false;
    }

}

export default AccountService;
