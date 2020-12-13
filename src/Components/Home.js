import React from 'react'
import { Row,Col } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Home() {
    return (
        <div className="container-fluid bg-dark">
            <Row>
                <Col>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="https://avatars1.githubusercontent.com/u/43513353?s=400&u=37e0f9f983dcc0f1bd88b7a9d8d22c51eb4babf6&v=4" alt="photo" className="m-5 shadow-lg" style={{borderRadius:"100%"}}/>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-start flex-column">
                    <h1 style={{fontSize:"72px",color:"#919191"}}>Ramyashree Shetty</h1>
                    <h3 style={{color:"#4dffff",fontSize:"25px"}}>React Developer</h3>
                    <div>
                        <a className="m-2" href="https://www.instagram.com/ramyashree_shetty/" target="_blank">
                            <FaInstagram  color="white" fontSize="32px"/>
                        </a>
                        <a className="m-2" href="https://discord.com/channels/734460647319928842/734460648096006228" target="_blank">
                            <FaDiscord  color="white" fontSize="32px"/>
                        </a>
                        <a className="m-2" href="https://github.com/ramyashreeshetty" target="_blank">
                            <FaGithub  color="white" fontSize="32px"/>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home
