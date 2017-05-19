import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import ComplaintService from '../services/ComplaintService';

var rb = ReactBootstrap;
var FormGroup = rb.FormGroup;
var ControlLabel = rb.ControlLabel;
var FormControl = rb.FormControl;
var Radio = rb.Radio;
var Button = rb.Button;
var Panel = rb.Panel;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;

export var ComplaintFormInstance = React.createClass ({

    getInitialState: function () {
        return { radio: 'Privatni' };
    },

    textChange: function(e) {
      this.setState({ message: e.target.value });
    },

    handleOptionChange: function (changeEvent) {
      this.setState({
        radio: changeEvent.target.value
      });
    },

    handleFormSubmit: function (formSubmitEvent) {
      formSubmitEvent.preventDefault();
      var priv = this.state.radio==='Privatni';

      ComplaintService.postComplaint(this.state.message, priv);
      formSubmitEvent.target.reset();
      this.setState({ radio: 'Privatni' });
    },

      render() {
          return (
            <Grid>
               <Row className="show-grid">
                 <Col md={8} mdOffset={2}>
                     <Panel header="Unos žalbe" bsStyle="danger">
                       <form onSubmit={this.handleFormSubmit}>

                         <FormGroup controlId="formControlsTextarea">
                           <ControlLabel>Unesite žalbu:</ControlLabel>
                           <FormControl componentClass="textarea" onChange={ this.textChange }/>
                         </FormGroup>

                         <FormGroup>
                           <Radio name="radioGroup" inline
                            value="Privatni"
                            checked={this.state.radio==='Privatni'}
                            onChange={this.handleOptionChange} >
                             Privatna
                           </Radio>
                           {' '}
                           <Radio name="radioGroup"
                            value="Javni" inline
                            checked={this.state.radio==='Javni'}
                            onChange={this.handleOptionChange} >
                             Javna
                           </Radio>
                         </FormGroup>

                         <Button>
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
)
