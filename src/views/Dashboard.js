import React, {Component} from 'react';
import '../App.css';
// react-bootstrap components
import SideNav from "../components/SideNav.js";
import {Container, Row, Col} from 'react-bootstrap';

class Dashboard extends React.Component {
  render() {
    return (
        <div className="wrapper">
            <div>
            <SideNav
            {...this.props}
            //   routes={routes}
            // bgColor={this.state.backgroundColor}
            // activeColor={this.state.activeColor}
            />
            </div>
        </div>
        <div className="text-light bg-dark">
            <div className="main_sec">
            <h1>Welcome userEmail //useremail will appear here</h1>
            <div>
            <Container className="border border-light solid rounded p-3">
                <Row>
                    <Col>
                        <h3>Next Appointment</h3>
                        <p>
                        Your Next Appointment Is: //appointment info will render here
                        </p>
                    </Col>
                </Row>
            </Container>
            </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;
