import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { makeCancelable } from '../../globals';

var rb = ReactBootstrap;
var ListGroupItem = rb.ListGroupItem;

class User extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        user: null,
        errorMessage: null,
      }
      var req = null;
    }

    componentDidMount() {
      this.getUser();
    }

    //API request method
    getUser() {
      this.req = makeCancelable(fetch('http://localhost:8080/korisnik/get?Id=1'));
      this.req.promise.then(response => response.json())
        .then(result => this.setState({ user: result }))
        .catch(error => this.setState({ errorMessage: error + "" }));
        console.log(this.state.user);
    }

    render(){
      var username = this.state.user.map((i) => (<a href=""> {i} </a>) );
      console.log(username);
      return ({username});
    }

}

export default User;
