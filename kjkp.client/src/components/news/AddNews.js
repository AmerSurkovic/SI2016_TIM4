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
            locations : []
        };


        this.getLokacijas = this.getLokacijas.bind(this);
        this.addObavijest = this.addObavijest
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
                        locations : json
                    });
                  }).catch(error => {
                      alert(error);
                    });

    }

    addObavijest() {
        //TODO
    }

    render() {
        const locations = this.state.locations;
        return(
            <Col md={6} mdOffset={3}>
                <Panel header="Nova obavijest" bsStyle="success">
                <form>
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Naslov obavijesti"
                        placeholder="Naslov"
                        />
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Tekst obavijesti</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Tekst obavijesti..." />
                    </FormGroup>
                    <FormGroup controlId="formControlsSelectMultiple">
                      <ControlLabel>Lokacije</ControlLabel>
                      <FormControl componentClass="select" size={locations.length > 20 ? 20 : locations.length} multiple>
                        {
                            locations.map((location) =>
                                 <option key={location.id} value={location.id}>{location.naziv}</option>
                            )
                        }
                      </FormControl>
                    </FormGroup>
                    <Button type="button" bsStyle="success">
                        Potvrdi
                    </Button>
                </form>
                </Panel>
            </Col>);
    }
}
