var queryString = require ('query-string');

var url = 'http://localhost:8080/';
var header = new Headers({
    'Content-Type': 'application/json; charset=utf8'
});

var ForbiddenWordService = new function(){
    this.postWord = (word)=>{
      return fetch(url+'/zrijeci/kreiraj', {
        method: 'POST',
        headers: header,
        body: JSON.stringify({
          rijec: word,
          korisnikID: 1
        })
      });
    }
}

export default ForbiddenWordService;
