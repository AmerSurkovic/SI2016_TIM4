import AccountService from './AccountService';

var queryString = require('query-string');

var url = 'http://localhost:8080/';


var LocationService = new function () {
    this.postNews = (tekst) => {

        var header = {};
        var auth = AccountService.getAuthInfo();

        if (auth != null && auth.role === "ROLE_ADMIN") {

            var header = {};
            var auth = AccountService.getAuthInfo();
            header = new Headers({
                'Content-Type': 'application/json; charset=utf8',
                'Authorization': auth.token
            });

            return fetch(url + 'lokacija/dodaj', {
                method: 'POST',
                headers: header,
                body: JSON.stringify({
                    naziv: tekst
                })
            });
        }
        else {
            alert("You must be an admin to execute this command.");
        }
    }
}

export default LocationService;
