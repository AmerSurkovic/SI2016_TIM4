import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import {makeCancelable} from '../../globals';


import ComplaintService from '../../services/ComplaintService';


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

export var ComplaintFormInstance = React.createClass({

  getInitialState: function () {
    return { radio: 'Privatni',
            words: [],
            errorMessage: null
   };
  },

  textChange: function (e) {
    this.setState({ message: e.target.value });
  },

  handleOptionChange: function (changeEvent) {
    this.setState({
      radio: changeEvent.target.value
    });
  },

  getWords: function() {
    this.req = makeCancelable(fetch('http://localhost:8080/zrijeci/prikazi_rijeci'));
    this.req.promise.then(response => response.json())
      .then(result => this.setState({ words: result}))
      .catch(error => this.setState({ errorMessage: error + "" }));
  },

  //Verification of words in message
  verifyWords: function (message){

    //Replace special signs and turn all characters to upper case
    message = message.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
    message = message.toUpperCase();

    //Turn message in array of words
    var msgWords = message.split(" ");

    //Get forbiden words from state
    var words = this.state.words.map((w) => (w));

    // Lengths of word arrays
    var words_len = words.length;
    var msgWords_len = msgWords.length;

    //Compare
    for( var i = 0; i < words_len; i++ ){
      var r = words[i].rijec.toUpperCase();
      for(var j = 0; j < msgWords_len; j++ ){
        if(msgWords[j] == r) return false;
      }
    }

    return true;

  },

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();
    var priv = this.state.radio === 'Privatni';

    //Is message empty?
    if(this.state.message == null){
      alert("Can't be empty!");
      return;
    }
    
    if(this.verifyWords(this.state.message)){
      ComplaintService.postComplaint(this.state.message, priv);
      formSubmitEvent.target.reset();
      this.setState({ radio: 'Privatni' });
    }else{
      alert("One of the words you are using is forbidden! Pls try again!");
    }
  },

  render() {
    //Prepare forbidden words
    this.getWords();
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={8} mdOffset={2}>
            <Panel header="Unos žalbe" bsStyle="danger">
              <form onSubmit={this.handleFormSubmit}>

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Unesite žalbu:</ControlLabel>
                  <FormControl componentClass="textarea" onChange={this.textChange} />
                </FormGroup>

                <FormGroup>
                  <Radio name="radioGroup" inline
                    value="Privatni"
                    checked={this.state.radio === 'Privatni'}
                    onChange={this.handleOptionChange} >
                    Privatna
                           </Radio>
                  {' '}
                  <Radio name="radioGroup"
                    value="Javni" inline
                    checked={this.state.radio === 'Javni'}
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
