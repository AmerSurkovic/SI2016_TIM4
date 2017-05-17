import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

var rb = ReactBootstrap;
var FormGroup = rb.FormGroup;
var ControlLabel = rb.ControlLabel;
var FormControl = rb.FormControl;
var HelpBlock = rb.HelpBlock;
var Radio = rb.Radio;
var Button = rb.Button;
var Panel = rb.Panel;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;

export class ComplaintFormInstance extends React.Component {
    render() {
        return (
          <Grid>
             <Row className="show-grid">
               <Col md={8} mdOffset={2}>
                   <Panel header="Unos žalbe" bsStyle="danger">
                     <form>
                       <FormGroup controlId="formControlsTextarea">
                         <ControlLabel>Unesite žalbu:</ControlLabel>
                         <FormControl componentClass="textarea"/>
                       </FormGroup>

                       <FormGroup>
                         <Radio name="radioGroup" inline>
                           Privatna
                         </Radio>
                         {' '}
                         <Radio name="radioGroup" inline>
                           Javna
                         </Radio>
                       </FormGroup>

                       <FormGroup>
                         <ControlLabel>Static text</ControlLabel>
                         <FormControl.Static>
                           email@example.com
                         </FormControl.Static>
                       </FormGroup>

                       <Button type="submit">
                           Otkaži
                       </Button>
                       {' '}
                       <Button type="submit" bsStyle="danger">
                           Unesi
                       </Button>
                     </form>
                   </Panel>
               </Col>
             </Row>
          </Grid>

        );
    }
}
