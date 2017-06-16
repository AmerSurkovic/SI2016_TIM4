import AccountService from './AccountService';

var queryString = require('query-string');

var url = 'https://immense-chamber-20752.herokuapp.com/';


var ForbiddenWordService = new function () {

  this.postWord = (word) => {

    var header = {};
    var auth = AccountService.getAuthInfo();

    if (auth != null && auth.role == "ROLE_HR") {

      header = new Headers({
        'Content-Type': 'application/json; charset=utf8',
        'Authorization': auth.token
      });

      return fetch(url + '/zrijeci/kreiraj', {
        method: 'POST',
        headers: header,
        body: JSON.stringify({
          rijec: word
        })
      });
    }
    else {

    }


  }
}

export default ForbiddenWordService;
