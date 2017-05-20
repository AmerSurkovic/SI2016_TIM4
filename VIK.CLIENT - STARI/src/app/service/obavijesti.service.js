
var queryString = require ('query-string');

var url = 'http://localhost:3306...';
var header = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
});


var ObavijestiService = new function(){
  //GET
  this.getObavijesti = ()=>{
    return fetch(url)
            .then( (res)=>{
              return res.json();
            } )
            .then((data)=>{

              return data;
            });
  }

  //POST
  this.createObavijesti = (input)=>{
    /*
      const input = {
        name: 'neko',
        lastname: 'nekic'
      }; --> moze i ova varijanta
    */


    let fetchData = {
      method: 'POST',
      body: queryString.stringify(input),
      headers: header
    };

    fetch('http://localhost:8080/api/bears', fetchData)
      .then((res)=>{return res.json()})
      .then((poruka)=>{ /*return poruka;*/ });
  }

  //PUT
  this.updateObavijesti = (id, newValues)=>{

    let fetchData = {
      method: 'PUT',
      body: queryString.stringify(newValues),
      headers: header
    };

    fetch(url + '/' + id, fetchData)
      .then((res)=>{return res.json();})
      .then((poruka)=>{  });
  }

  //DELETE
  this.deleteObavijesti = (id)=>{

    fetch(url + '/' + id, {
      method: 'delete'
    }).then((response) =>{
      return response.json();
    }).then((poruka)=>{

    });
  }


}



module.exports = ObavijestiService;
