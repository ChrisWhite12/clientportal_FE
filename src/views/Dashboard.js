import {Container, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router";
import SideNav from "../components/SideNav.js";
import '../App.css';

const Dash = props => {
    return (
            <Container id="Dashboard" fluid="md">
                <Row>
                    <Col className="col-4 text-light bg-dark">  
                        <SideNav />
                    </Col>
                    <Col className="col-8 text-light bg-dark">
                        <h1>Welcome userEmail //useremail will appear here</h1>
                        <Container fluid="xl" className="border border-light solid rounded p-3">
                            <Row>
                                <h3>Next Appointment</h3>
                                <p>Your Next Appointment Is: //appointment info will render here</p>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            );
    };

const Dashboard = withRouter(Dash);
export default Dashboard