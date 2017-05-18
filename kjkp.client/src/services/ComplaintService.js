var queryString = require ('query-string');

var url = 'http://localhost:8080/zalbe/dodaj_zalbu';
var header = new Headers({
    'Content-Type': 'application/json; charset=utf8'
});

var ComplaintService = new function() {



    this.postComplaint = (text, priv)=>{
        return fetch(url, {
          method: 'POST',
          headers: header,
          body: JSON.stringify({
            tekst: text,
            privatna: priv,
            korisnikID: 1
          })
        });
    }
}

export default ComplaintService;
