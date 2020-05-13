import { Row, Card, Button, Container } from 'react-bootstrap';
import React, { Component } from "react";
import NavigationBar from "../navigationBar/NavigationBar";
import { Link } from "react-router-dom";


class ProjectDetails extends Component {
    render() {
        return (

            <div>
<NavigationBar />
<Container>
                <Row >
                    <Card className="col-md-6 col-xs-12" style={{ width: '18rem', margin: "0" }}>
                        <Card.Img variant="top" src="images/Redesign Kijamii Website (1).PNG" />
                        <Card.Body>
                            <Card.Title>Redesigned the existed website (Home Screen) UI using HTML5/CSS3/JavaScript</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <br />
                    <Card className="col-md-6 col-xs-12" style={{ width: '18rem', }}>
                        <Card.Img variant="top" src="images/NewLife (1).PNG" />
                        <Card.Body>
                            <Card.Title>Developed in HTML5/CSS3/JavaScript/Bootstrap the company web app UI to replace the existed UI</Card.Title>
                       
                        </Card.Body>
                    </Card>
                </Row>
            </Container>   
           
            </div>

           

        );
    }
}

export default ProjectDetails;