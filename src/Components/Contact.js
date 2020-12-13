import React from 'react'
import { Form,Container,Col,Row,Button} from 'react-bootstrap'

function Contact() {
    return (
        <div className="Container-fluid bg-primary">
            <Row>
                <Col>
                        <h1 className="m-4 text-center text-light">
                            Contact me
                        </h1>
                </Col>
            </Row>
                <Col sm="12" lg="8" md="8" className="Container-fluid text-light" >
                    <Form action="https://formspree.io/f/xqkgygza" method="POST">

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage">
                            <Form.Check type="text" label="Enter message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Form>
                </Col>
        </div>
    )
}

export default Contact
