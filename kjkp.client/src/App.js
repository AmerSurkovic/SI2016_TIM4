import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//import * as ReactBootstrap from 'react-bootstrap';
import { NavbarInstance } from './components/NavbarInstance';
import { ComplaintFormInstance } from './components/ComplaintForm';
import { ComplaintList } from './components/ComplaintList';

import { CreatingAccount } from './components/CreatingAccount';

import { AddLocationForm } from './components/AddLocationForm';
import { DeleteLocationForm } from './components/DeleteLocationForm';



class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarInstance />

        <Router>
          <div>
            <Route exact path="/" component={ComplaintList} />
            <Route path="/signup" component={CreatingAccount} />
            <Route path="/location/add" component={AddLocationForm} />
            <Route path="/complaint" component={ComplaintFormInstance} />
            <Route path="/location/delete" component={DeleteLocationForm} />
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

// React.render(
//   <MyComponent />,
//   document.getElementById('root')
// );
