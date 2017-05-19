var queryString = require ('query-string');
import axios from 'axios';

var url = 'http://localhost:8080/';
var header = new Headers({
    'Content-Type': 'application/json; charset=utf8'
});

var ComplaintService = new function() {


    this.getPrivateComplaints = ()=>{
      /*  return fetch(url + 'zalbe/prikazi_zalbe', {
          method: 'GET',
          headers: header,
        }).then(results => results.json();)
        . then(return items;);*/
    }

    this.getPublicComplaints = ()=>{
        var response;
        this.state = {
          tmp:[]
        }
        return fetch(url + 'zalbe/prikazi_zalbe', {
          method: 'GET',
          headers: header,
        }).then(function(responseObj){
          return responseObj;
                });
    }

    this.postComplaint = (text, priv)=>{
        return fetch(url + 'zalbe/dodaj_zalbu', {
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
