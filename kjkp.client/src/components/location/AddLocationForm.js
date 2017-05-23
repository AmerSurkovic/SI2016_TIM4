import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import LocationService from '../../services/LocationService';

var rb = ReactBootstrap;
var Button = rb.Button;
var ControlLabel=rb.ControlLabel;
var FormGroup=rb.FormGroup;
var FormControl=rb.FormControl;
var Form=rb.Form;
var Panel=rb.Panel;
var Grid=rb.Grid;
var Row=rb.Row;
var Col=rb.Col;


export var AddLocationForm = React.createClass ({

    textChange: function (e) {
      this.setState({ message: e.target.value });
    },

    handleFormSubmit: function (formSubmitEvent){
      formSubmitEvent.preventDefault();

      LocationService.postNews(this.state.message);
      //alert(this.state.message);
      formSubmitEvent.target.reset();
    },

    render() {
        return (
           <Grid>
               <Row className="show-grid">
                	<Col md={8} mdOffset={2}>
						<Panel header="Unos lokacije" bsStyle="default">
						    <form onSubmit={this.handleFormSubmit}>
								 <Form inline>
								    <FormGroup controlId="formBasicText">
								      <ControlLabel>Lokacija</ControlLabel>
								      {' '}

								      <FormControl componentClass="textarea" onChange={this.textChange} placeholder="Lokacija" />

								    </FormGroup>
								    {' '}
								    <Button type="submit">
								      Unesi
								    </Button>
								 </Form>
							</form>
						</Panel>
					</Col>
				</Row>
			</Grid>



        );
    }
})
