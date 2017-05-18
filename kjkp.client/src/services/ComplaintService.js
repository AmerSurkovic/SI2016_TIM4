var queryString = require ('query-string');

var url = 'http://localhost:3306...';
var header = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
});

var ComplaintService = new function() {



    this.postComplaint = (text, priv)=>{
        return fetch(url, {
          method: 'POST',
          headers: header,
          body: JSON.stringify({
            message: text,
            privacy: priv,
          })
        });
    }
}
