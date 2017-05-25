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
var Panel = rb.Panel;
var Grid = rb.Grid;
var Row = rb.Row;


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
            return (<div>WELCOME!</div>);
        }
        const form = (
            <Grid>
                <Row className="show-grid">
                  <Col md={6} mdOffset={3}>
                    <Panel header="Prijava" bsStyle="info">
                      <Form horizontal>
                          <FormGroup controlId="formHorizontalEmail">
                            <Col md={3}>
                              <ControlLabel> Korisnicko ime: </ControlLabel>
                            </Col>
                            <Col md={8}>
                              <FormControl value={this.state.username} onChange={this.onChangeUsername} type="text" placeholder="Username" />
                            </Col>
                          </FormGroup>

                          <FormGroup controlId="formHorizontalPassword">
                            <Col md={3}>
                              <ControlLabel> Sifra: </ControlLabel>
                            </Col>
                            <Col md={8}>
                              <FormControl value={this.state.password} onChange={this.onChangePassword} type="password" placeholder="Password" />
                            </Col>
                          </FormGroup>

                          <FormGroup>
                            <Col mdOffset={1}>
                                  <Button bsStyle="primary" type="button" onClick={this.onLogin}>
                                      Sign in
                                  </Button>
                            </Col>
                          </FormGroup>
                      </Form>
                    </Panel>
                  </Col>
                </Row>
            </Grid>
        );
        return (
            <div>
                {form}
            </div>
        );
    }
}
