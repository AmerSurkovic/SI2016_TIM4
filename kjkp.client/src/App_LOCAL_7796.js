import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//import * as ReactBootstrap from 'react-bootstrap';
import { NavbarInstance } from './components/NavbarInstance';

import { ComplaintFormInstance } from './components/complaint/ComplaintForm';
import { ComplaintList } from './components/complaint/ComplaintList';

import { Login } from './components/account/Login';
import { CreatingAccount } from './components/account/CreatingAccount';

import { AddLocationForm } from './components/location/AddLocationForm';
import { DeleteLocationForm } from './components/location/DeleteLocationForm';

import { AddingWord } from './components/forbiddenWords/AddingWord';
import { DeletingWord } from './components/forbiddenWords/DeletingWord';

import { AddingContactInformations } from './components/contactInformations/AddingContactInformations';


class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarInstance />
        <Router>
          <div>
            <Route exact path="/" component={ComplaintList} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={CreatingAccount} />
            <Route path="/location/add" component={AddLocationForm} />
            <Route path="/complaint" component={ComplaintFormInstance} />
            <Route path="/location/delete" component={DeleteLocationForm} />
            <Route path="/forbiddenwords/add" component={AddingWord} />
            <Route path="/forbiddenwords/delete" component={DeletingWord} />
            <Route path="/contactinformations/add" component={AddingContactInformations} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

// var MyComponent = React.createClass({
//   getInitialState: function () {
//     return { input: '' };
//   },
//
//   handleChange: function(e) {
//     this.setState({ input: e.target.value });
//   },
//
//   handleClick: function() {
//     console.log(this.state.input);
//   },
//
//   render: function() {
//     return (
//       <div>
//         <input type="text" onChange={ this.handleChange } />
//         <input
//           type="button"
//           value="Alert the text input"
//           onClick={this.handleClick}
//         />
//       </div>
//     );
//   }
// });
//
// export default MyComponent;
