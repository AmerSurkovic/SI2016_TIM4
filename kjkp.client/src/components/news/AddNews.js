import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import NewsService from '../../services/NewsService';
import AccountService from '../../services/AccountService';

var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var HelpBlock = ReactBootstrap.HelpBlock;
var Button = ReactBootstrap.Button;
var Col = ReactBootstrap.Col;
var Row = ReactBootstrap.Row;
var Panel = ReactBootstrap.Panel;

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export class AddNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            newItem: {},
            additionalLocations: []
        };


        this.getLokacijas = this.getLokacijas.bind(this);
        this.addObavijest = this.addObavijest.bind(this);
        this.inputFieldValueChanged = this.inputFieldValueChanged.bind(this);
        this.addLocation = this.addLocation.bind(this);
        this.onLocationValueChanged = this.onLocationValueChanged.bind(this);
        this.onRemoveLocation = this.onRemoveLocation.bind(this);
        //ostavi mi krs i looooooom idi s njoooom
    }

    componentDidMount() {
        this.getLokacijas();
    }

    getLokacijas() {
        var component = this;
        NewsService.getAllLocations()
            .then(response => {
                return response.json();
            }).then(json => {

                component.setState({
                    locations: json
                });
            }).catch(error => {
                alert(error);
            });

    }

    inputFieldValueChanged(event) {
        if (event.target.name == "title") {
            this.setState({
                title: event.target.value
            });
        }
        else if (event.target.name == "content") {
            this.setState({
                content: event.target.value
            });
        }
    }

    resetForm() {
        this.setState({
            title: "",
            selectedLocations: [],
            additionalLocations: [],
            content: ""
        });
    }

    onLocationSelectChanged(event) {
        var selected = [];
        for (var i = 0; i < event.target.options.length; i++) {
            var element = event.target.options[i];
            if (element.selected)
                selected.push(element.value);
        }
        this.setState({
            selectedLocations: selected
        });
    }

    addObavijest() {
        var item = {
            title: this.state.title,
            content: this.state.content,
            locations: [...this.state.selectedLocations, ...this.state.additionalLocations]
        };
        var component = this;
        NewsService.create(item)
            .then(response => {
                alert("Success");
                this.resetForm();
            })
            .catch(error => alert(error));
    }

    addLocation() {

        var locs = this.state.additionalLocations;
        locs.push('');
        this.setState({
            additionalLocations: locs
        });

    }

    onRemoveLocation(index, event) {
        //alert("Removed index: " + index);
        var locs = this.state.additionalLocations;
        locs.splice(index, 1);
        //alert("list after removing: " + JSON.stringify(locs));
        this.setState({
            additionalLocations: locs
        });
    }

    onLocationValueChanged(index, event) {
        //alert("Changed index: " + index + " to: " + event.target.value);
        var locs = this.state.additionalLocations;
        locs[index] = event.target.value;
        this.setState({
            additionalLocations: locs
        });
    }

    render() {
        if (AccountService.getAuthInfo() == null || AccountService.getAuthInfo().role != "ROLE_ADMIN") {
            return (<div></div>)
        }

        const locations = this.state.locations;
        return (
            <Col md={6} mdOffset={3}>
                <Panel header="Nova obavijest" bsStyle="success">
                    <form>
                        <FormGroup>
                            <ControlLabel>Naslov obavijesti</ControlLabel>
                            <FormControl value={this.state.title} name="title" onChange={this.inputFieldValueChanged} placeholder="Naslov obavijesti" />
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Tekst obavijesti</ControlLabel>
                            <FormControl value={this.state.content} name="content" onChange={this.inputFieldValueChanged} componentClass="textarea" placeholder="Tekst obavijesti..." />
                        </FormGroup>
                        <FormGroup controlId="formControlsSelectMultiple">
                            <ControlLabel>Lokacije</ControlLabel>
                            <FormControl onChange={this.onLocationSelectChanged.bind(this)} componentClass="select" size={locations.length > 20 ? 20 : locations.length} multiple>
                                {
                                    locations.map((location) =>
                                        <option key={location.id} value={location.naziv}>{location.naziv}</option>
                                    )
                                }
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={this.addLocation} type="button" value="Dodaj jos lokacija" bsStyle="info">
                                Dodaj novu lokaciju
                            </Button>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={5}>
                                    {
                                        this.state.additionalLocations.map((location, index) => {
                                            //alert("to render " + location + " with index" + index);
                                            return (
                                                <div>
                                                    <Col md={10}>
                                                        <FormControl value={location} key={index} name="content" onChange={(e) => this.onLocationValueChanged(index, e)}>
                                                        </FormControl>
                                                    </Col>
                                                    <Button onClick={(e) => this.onRemoveLocation(index, e)} bsStyle="danger" >
                                                        X
                                                </Button>
                                                </div>
                                            );
                                        })}
                                </Col>
                            </Row>
                        </FormGroup>
                        <Button type="button" onClick={this.addObavijest} bsStyle="success">
                            Potvrdi
                        </Button>
                    </form>
                </Panel>
            </Col>);
    }
}
