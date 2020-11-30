import React, {Component} from 'react';
// reactstrap components
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";

class Dashboard extends React.Component {
  render() {
    return (
        <div>
            <div className="main_sec">
            <h1>Welcome userEmail //useremail will be linked here</h1>
            <div>
            <Card
                bg={Dark.toLowerCase()}
                key={Dark}
                text={Dark.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;
