import React, { Component } from "react";

import './style.css';

import { Link } from "react-router-dom";
import { Card,Button, Row, Col, Container } from 'react-bootstrap';
import NavigationBar from"../navigationBar/NavigationBar";


class ProjectsListing extends Component {

    // constructor(props) {
    //   super(props);
    // }

    render() {
        // const { value, opp } = this.state;
        // const { classes } = this.props;
        return (

       <Container id="projects">
                <h2 style={{margin: "2rem 0 2rem 0"}}>My Recent Work</h2>

  <Row >
  <Card  className="col-md-6 col-xs-12" style={{ width: '18rem', margin:"0" }}>
  <Card.Img variant="top" src="images/Redesign Kijamii Website (1).PNG" />
  <Card.Body>
    <Card.Title>Kijamii Website</Card.Title>
    <Link to="/projects">
                  
    <Button variant="primary">Details</Button>

                </Link>
  </Card.Body>
</Card>
<br />
<Card className="col-md-6 col-xs-12" style={{ width: '18rem',  }}>
  <Card.Img variant="top" src="images/NewLife (1).PNG" />
  <Card.Body>
    <Card.Title>NewLife HR Website</Card.Title>
    <Link to="/projects">
                  
    <Button variant="primary">Details</Button>

                </Link>
  </Card.Body>
</Card>
  </Row>
  </Container>   


    






        );
    }
}

export default ProjectsListing;