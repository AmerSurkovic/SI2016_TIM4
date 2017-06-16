import AccountService from './AccountService';
var queryString = require('query-string');

var url = 'https://immense-chamber-20752.herokuapp.com/';

var ContactInfoService = new function () {

  this.postContactInfo = (phoneIN, addressIN, emailIN) => {

    var header = {};
    var auth = AccountService.getAuthInfo();

    if (auth != null) {
      header = new Headers({
        'Content-Type': 'application/json; charset=utf8',
        'Authorization': auth.token
      });
      return fetch(url + 'contact/add', {
        method: 'POST',
        headers: header,
        body: JSON.stringify({
          email: emailIN,
          phone: phoneIN,
          address: addressIN
        })
      });

    }
    else {
      alert('You must be logged in to edit contact info!');
    }



  }
}

export default ContactInfoService;
