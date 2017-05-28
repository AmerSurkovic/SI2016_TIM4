var queryString = require('query-string');

var url = 'http://localhost:8080/';
var header = new Headers({
    'Content-Type': 'application/json; charset=utf8'
});

var ContactInfoService = new function() {

    this.postContactInfo = (phoneIN, addressIN, emailIN) => {
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
}

export default ContactInfoService;
