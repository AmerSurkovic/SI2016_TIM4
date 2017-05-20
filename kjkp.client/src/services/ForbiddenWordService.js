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

    this.getWords = ()=>{
        return fetch(url + '/zrijeci/get', {
          method: 'GET',
          headers: header,
        }).then(function(responseObj) {
          return responseObj;
        });
    }


    
    // this.deleteWord = (word)=>{
    //   return fetch(url + '/zrijeci/delete', {
    //     method: 'DELETE',
    //     headers:header,

    //   }).then(function())
    // }

}

export default ForbiddenWordService;
