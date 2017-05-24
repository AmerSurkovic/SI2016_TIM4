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


var ForbiddenWordService = new function () {
  this.postWord = (word) => {
    return fetch(url + '/zrijeci/kreiraj', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        rijec: word
      })
    });
  }
}

export default ForbiddenWordService;
