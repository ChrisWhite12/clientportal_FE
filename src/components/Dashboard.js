import React, {Component} from 'react';
import {useGlobalState} from '../config/store';
import '../App.css';
// react-bootstrap components
import {Container, Row, Col} from 'react-bootstrap';

    
const Dashboard = () => {

    const {store} = useGlobalState()
    const {loggedInUser} = store
    
    return (
        <div>
            <div className="main_sec">
            <h1>Welcome userEmail //useremail will be linked here</h1>
            <div>
            <Container fluid="lg" border="solid">
                <Row row-relative>
                    <Col lg={true} col-border col-border-padding>
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
