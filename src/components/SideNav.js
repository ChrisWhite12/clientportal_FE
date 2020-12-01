import React, {Component} from 'react';
import '../App.css';
// react-bootstrap components
import {Nav} from 'react-bootstrap';

class SideNav extends React.Component {
  render() {
    return (
        <div className="text-light bg-dark">
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link className="border border-light solid rounded p-3" href="/home">Dashboard</Nav.Link>
            <Nav.Link className="border border-light solid rounded p-3" eventKey="link-1">Client Info</Nav.Link>
            <Nav.Link className="border border-light solid rounded p-3" eventKey="link-2">Booked Appointments</Nav.Link>
            <Nav.Link className="border border-light solid rounded p-3" eventKey="link-3">Notifications</Nav.Link>
            </Nav>
        </div>
    );
  }
}

export default SideNav;
