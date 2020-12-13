import React from 'react'
import { Container,Col,Row,Card,Button} from 'react-bootstrap'

function Projects() {
    return (
        <div>
            <Container id="project">
                <Row>
                    <Col>
                        <h1 className="mt-3 text-center">My Projects</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="todo.png" />
                        <Card.Body>
                            <Card.Title>TO-DO App</Card.Title>
                            <Card.Text>
                                An App to keep track of your tasks.
                            </Card.Text>
                            <Button  
                            onclick={() => {
                                window.open("https://ramyashree-todoapp.netlify.app/","_blank")

                            }}
                            variant="primary">Visit</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="todo.png" />
                        <Card.Body>
                            <Card.Title>TO-DO App</Card.Title>
                            <Card.Text>
                                An App to keep track of your tasks.
                            </Card.Text>
                            <Button  
                            onclick={() => {
                                window.open("https://ramyashree-todoapp.netlify.app/","_blank")

                            }}
                            variant="primary">Visit</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="todo.png" />
                        <Card.Body>
                            <Card.Title>TO-DO App</Card.Title>
                            <Card.Text>
                                An App to keep track of your tasks.
                            </Card.Text>
                            <Button  
                            onclick={() => {
                                window.open("https://ramyashree-todoapp.netlify.app/","_blank")

                            }}
                            variant="primary">Visit</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects
