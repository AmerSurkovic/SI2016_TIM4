import AccountService from './AccountService';

var queryString = require('query-string');

var url = 'http://localhost:8080/';


var ComplaintService = new function () {

    this.postComplaint = (text, priv) => {

        var header = {};
        var auth = AccountService.getAuthInfo();

        if (auth != null) {
            header = new Headers({
                'Content-Type': 'application/json; charset=utf8',
                'Authorization': auth.token
            });
            return fetch(url + 'zalbe/dodaj_zalbu', {
                method: 'POST',
                headers: header,
                body: JSON.stringify({
                    tekst: text,
                    privatna: priv
                })
            });

        }
        else {
            alert('You must be logged in to post a complatint!');
        }

    }
}


export default ComplaintService;
