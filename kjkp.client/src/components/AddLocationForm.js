import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

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


export class AddLocationForm extends React.Component {
    render() {
        return (
           <Grid>
               <Row className="show-grid">
                	<Col md={8} mdOffset={2}>
						<Panel header="Unos lokacije" bsStyle="default">
						    <form onSubmit={this.HandleFormSubmit}>
								 <Form inline>
								    <FormGroup controlId="formBasicText">
								      <ControlLabel>Lokacija</ControlLabel>
								      {' '}
								      
								      <FormControl type="text" placeholder="Lokacija" />

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
}