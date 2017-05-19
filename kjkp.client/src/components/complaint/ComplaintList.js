import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
<<<<<<< HEAD:kjkp.client/src/components/complaint/ComplaintList.js
import ComplaintService from '../../services/ComplaintService';
=======
import ComplaintService from '../services/ComplaintService';
import Complaint from '../components/Complaint';
import {makeCancelable} from '../globals'
>>>>>>> complaint-list:kjkp.client/src/components/ComplaintList.js

var rb = ReactBootstrap;
var ListGroup = rb.ListGroup;
var ListGroupItem = rb.ListGroupItem;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Panel = rb.Panel;
<<<<<<< HEAD:kjkp.client/src/components/complaint/ComplaintList.js
var Button = rb.Button;

  // var fillComplaintList = React.createClass ({
  //   render: function
  // })

export var ComplaintList = React.createClass ({

    getInitialState: function () {
        return { };
    },

    handleClick: function(e) {
      var parsedData = ComplaintService.getPrivateComplaints();
      console.log(parsedData);

      return;
    },

    // fillComplaintList: function(complaints) {
    //     if(complaints == null)
    //       return;
    //
    //     return(
    //         <ListGroup>
    //         for(complaint in complaints)
    //         {
    //           <ListGroupItem> { complaint.message } </ListGroupItem>
    //         }
    //         </ListGroup>
    //     );
    // },
=======

export default class ComplaintList extends React.Component {

    constructor(props){
      super(props);
      this.state = {complaints: [],
                      errorMessage: null,
                    }
      var req = null;
    }

    componentDidMount() {
      this.getComplaints();
    }


    //API request method
    getComplaints(){
        this.req = makeCancelable(fetch('http://localhost:8080/zalbe/prikazi_zalbe'));
        this.req.promise.then(response => response.json())
          .then(result => this.setState({complaints:result}))
          .catch(error => this.setState({errorMessage:error+""}));
    }
>>>>>>> complaint-list:kjkp.client/src/components/ComplaintList.js

    render() {
        var complaints = this.state.complaints.map((comp) => (<Complaint complaint = {comp}/>)  );
        console.log(this.state.complaints);
        return (
          <Grid>
            <Row className="show-grid">
              <Col md={8} mdOffset={2}>
                <Panel header="Pregled žalbi" bsStyle="info">
                  <ListGroup>
                    {complaints}
                  </ListGroup>
                </Panel>
              </Col>
            </Row>
          </Grid>

        );
    }
}
