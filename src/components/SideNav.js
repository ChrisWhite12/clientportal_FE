import React from 'react';
import '../App.css';
// react-bootstrap components
import {Nav} from 'react-bootstrap';
import { withRouter } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

const Side = props => {
  let match = useRouteMatch()
  //mobile first design - can't see navbar
  // state = {
  //   isOpen: false
  // }
  // //toggle to open menu on side - mobile design
  // handleToggle = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // };

  //return this when the toggle is open (mobile first)
  // const { isOpen } = this.state;
  return (
      <div className="text-light bg-dark">
          <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link className="border border-light solid rounded p-3" to={`${match.url}/`}>Dashboard</Nav.Link>
          <Nav.Link className="border border-light solid rounded p-3" eventKey="link-1" ><Link to={`${match.url}/info`}>Client Info</Link></Nav.Link>
          <Nav.Link className="border border-light solid rounded p-3" eventKey="link-2" to={`${match.url}/appointments`}>Booked Appointments</Nav.Link>
          <Nav.Link className="border border-light solid rounded p-3" eventKey="link-3" to={`${match.url}/notifications`}>Notifications</Nav.Link>
          </Nav>
      </div>
  );
}

const SideNav = withRouter(Side);
export default SideNav;