import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import NewsService from '../../services/NewsService';

var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var HelpBlock = ReactBootstrap.HelpBlock;
var Button = ReactBootstrap.Button;
var Col = ReactBootstrap.Col;
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
            newItem: {}
        };


        this.getLokacijas = this.getLokacijas.bind(this);
        this.addObavijest = this.addObavijest.bind(this);
        this.inputFieldValueChanged = this.inputFieldValueChanged.bind(this);
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
            locations: this.state.selectedLocations
        };
        var component = this;
        NewsService.create(item)
            .then(response => alert(response))
            .catch(error => alert(error));
    }

    render() {
        const locations = this.state.locations;
        return (
            <Col md={6} mdOffset={3}>
                <Panel header="Nova obavijest" bsStyle="success">
                    <form>
                        <FormGroup>
                            <ControlLabel>Naslov obavijesti</ControlLabel>
                            <FormControl name="title" onChange={this.inputFieldValueChanged} placeholder="Naslov obavijesti" />
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Tekst obavijesti</ControlLabel>
                            <FormControl name="content" onChange={this.inputFieldValueChanged} componentClass="textarea" placeholder="Tekst obavijesti..." />
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
                        <Button type="button" onClick={this.addObavijest} bsStyle="success">
                            Potvrdi
                    </Button>
                    </form>
                </Panel>
            </Col>);
    }
}
