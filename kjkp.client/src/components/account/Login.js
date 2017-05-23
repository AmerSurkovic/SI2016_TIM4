import React from "react";
import * as ReactBootstrap from "react-bootstrap";

import AccountService from '../../services/AccountService';

var rb = ReactBootstrap;
var FormGroup = rb.FormGroup;
var ControlLabel = rb.ControlLabel;
var FormControl = rb.FormControl;
var div = rb.div;
var Button = rb.Button;
var Form = rb.Form;
var Col = rb.Col;


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }
    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    onLogin() {
        var updateParent = this.props.onLoginCheck;
        var creds = {
            username: this.state.username,
            password: this.state.password
        };
        AccountService.login(creds)
            .then(response => {
                if (response.status == 200) {
                    var auth = {
                        isAuthenticated: true,
                        username: creds.username,
                        role: response.headers.get('role'),
                        token: response.headers.get('authorization')
                    };
                    AccountService.storeAuthInfo(auth);
                    updateParent(auth);
                }
                else {
                    var auth = {
                        isAuthenticated: false
                    };
                    updateParent(auth);
                }


            }).catch(error => {
                alert(error);
            })
        //alert(this.getState());
    }

    render() {
        if (AccountService.getAuthInfo() != null) {
            return (<div>You are already logged in!</div>);
        }
        const form = (

            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Korisnicko ime
                    </Col>
                    <Col sm={2}>
                        <FormControl value={this.state.username} onChange={this.onChangeUsername} type="text" placeholder="Username" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Sifra
                    </Col>
                    <Col sm={2}>
                        <FormControl value={this.state.password} onChange={this.onChangePassword} type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="button" onClick={this.onLogin}>
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
        return (
            <div>
                {form}
            </div>
        );
    }
}
