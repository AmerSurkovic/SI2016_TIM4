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


export class AddingContactInformations extends React.Component {
    render() {
        return (
           <Grid>
               <Row className="show-grid">
                	<Col md={8} mdOffset={2}>
						<Panel header="Unos kontakt informacija" bsStyle="default">
						    <Form horizontal>

						    	<FormGroup controlId="formControlsTextarea">
							      <Col componentClass={ControlLabel} sm={2}>
							        Broj telefona
							      </Col>
							      <Col sm={10}>
							        <FormControl type="phonenumber" placeholder="Broj telefona" />
							      </Col>
							    </FormGroup>

							    <FormGroup controlId="formHorizontalEmail">
							      <Col componentClass={ControlLabel} sm={2}>
							        Email
							      </Col>
							      <Col sm={10}>
							        <FormControl type="email" placeholder="Email" />
							      </Col>
							    </FormGroup>
						    	<FormGroup controlId="formControlsTextarea">
							      <Col componentClass={ControlLabel} sm={2}>
							        Ädresa
							      </Col>
							      <Col sm={10}>
							        <FormControl type="adress" placeholder="Adresa kompanije" />
							      </Col>
							    </FormGroup>

							    
							 </Form>
							 <FormGroup>
							      <Col smOffset={2} sm={10}>
							        <Button type="submit">
							          Unesi
							        </Button>
							      </Col>
							    </FormGroup>
						</Panel>
					</Col>
				</Row>
			</Grid>

        
			          
        );
    }
}




// import React from "react";
// import * as ReactBootstrap from 'react-bootstrap';

// var rb = ReactBootstrap;
// var Button = rb.Button;
// var ControlLabel=rb.ControlLabel;
// var FormGroup=rb.FormGroup;
// var FormControl=rb.FormControl;
// var Form=rb.Form;
// var Panel=rb.Panel;
// var Grid=rb.Grid;
// var Row=rb.Row;
// var Col=rb.Col;
// var FieldGroup=rb.FieldGroup;


// export class AddingContactInformations extends React.Component {
//     render() {
//         return (
//       //      <Grid>
//       //          <Row className="show-grid">
//       //           	<Col md={8} mdOffset={2}>
// 						 <Panel header="Unos kontakt informacija" bsStyle="default">
// 							<form>
// 							    <FieldGroup
// 							      id="formControlsText"
// 							      type="text"
// 							      label="Adresa kompanije"
// 							      placeholder="Enter text"
// 							    />
// 						    </form>

// 						    <form>
// 							    <FieldGroup
// 							      id="formControlsText"
// 							      type="text"
// 							      label="Adresa kompanije"
// 							      placeholder="Enter text"
// 							    />
// 						    </form>


// 						 //    <form onSubmit={this.HandleFormSubmit}>
// 							// 	 <Form inline>
// 							// 	    <FormGroup controlId="formBasicText">
// 							// 	      <ControlLabel>Lokacija</ControlLabel>
// 							// 	      {' '}
								      
// 							// 	      <FormControl type="text" placeholder="Lokacija" />

// 							// 	    </FormGroup>
// 							// 	    {' '}
// 							// 	    <Button type="submit">
// 							// 	      Unesi
// 							// 	    </Button>
// 							// 	 </Form>
// 							// </form>



// 					</Panel>
// 			// 		</Col>
// 			// 	</Row>
// 			// </Grid>

//        );
//     }
// }


