import { Row, Container } from 'react-bootstrap';
import React, { Component } from "react";
import * as emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            message: "",
        };
    }
    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    sendMessage(event) {
        event.preventDefault();
        const templateParams = {
            from_name: this.state.email,
            to_name: 'mohamed',
            feedback: this.state.feedback
        };
        if (this.state.email === "") {
            alert("Please write your mail");
        } else if (this.state.message === "") {
            alert("Please write your message");
        }
        else {
            emailjs.send('gmail', 'portfolio', templateParams, 'user_z8hj9aO9eKy0NilRa9KRW')
                .then((resp) => {
                    alert("Your message has been sent successfuly!")
                    console.log('SUCCESS!', resp.status, resp.text);
                }, (err) => {
                    console.log('FAILED...', err);
                });
            this.setState({
                email: "",
                message: ""
            });
        }
    }

    render() {
        return (
            <Container id="contacts">
                <h2 style={{ margin: "2rem 0 2rem 0" }}>Say Hello!</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id="email"
                            name="email"
                            onChange={this.handleInputChange.bind(this)}
                            placeholder="your email address"

                            value={this.state.email}

                            rows={1}
                            type="email" required />

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" id="message"
                            name="message"
                            onChange={this.handleInputChange.bind(this)}
                            placeholder="what would you like to chat about?"

                            value={this.state.message}

                            id="exampleFormControlTextarea1" rows="3" required />
                    </Form.Group>

                    <Button type="button"
                        value="Send"

                        onClick={this.sendMessage.bind(this)} >
                        Submit
                    </Button>
                </Form>
            </Container>

        );
    }
}

export default ContactForm;