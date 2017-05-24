import AccountService from './AccountService';

var queryString = require('query-string');

var url = 'http://localhost:8080/';
var header = {};

var auth = AccountService.getAuthInfo();
if (auth != null) {
    header = new Headers({
        'Content-Type': 'application/json; charset=utf8',
        'Authorization': auth.token
    });
}
else {
    header = new Headers({
        'Content-Type': 'application/json; charset=utf8'
    });
}

var LocationService = new function () {
    this.postNews = (tekst) => {
        return fetch(url + 'lokacija/dodaj', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                naziv: tekst
            })
        });
    }
}

export default LocationService;
