var queryString = require ('query-string');

var url = 'http://localhost:8080/';
var header = new Headers({
    'Content-Type': 'application/json; charset=utf8'
});

var LocationService = new function() {
    this.postNews = (tekst)=>{
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
