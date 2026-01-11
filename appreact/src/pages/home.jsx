
import React from 'react';
import '../css/home.css';
import {Link} from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modale from '../components/modale'

function home () {
    return (
        <div className='home-page'>
            <div className='container-fluid text-center'>
                <div className='row'>
                    <div className='Hero'>
                        <div className='Hero-content'>
                            <h1>Bonjour, je suis John Doe</h1>
                            <h2>Développeur Web Full Stack</h2> 
                            <Modale>
                                <Link to=''></Link>
                            </Modale>
                        </div>
                    </div> 
                  
                </div>
                
                
            </div>
            <div className='main'>
                <div className='container fluid shadow'>
                    <Row> 
                        <Col >
                            <div className='a-propos'>
                                <div className='titre-a-propos'>
                                    <h3>A propos</h3>
                                </div>
                                 <div className='about-picture'>

                                 </div>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ec delectusreicindis impedit aut iure enim placeat? Natus, neque at?
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ec delectusreicindis impedit aut iure enim placeat? Natus, neque at?
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ec delectusreicindis impedit aut iure enim placeat? Natus, neque at?
                                    </p>
                            </div>       
                        </Col> 
                        <Col>
                            <div className='competences'>
                                <div className='titre-competences'>
                                    <h3>Mes compétences</h3>
                                </div>
                                
                                <span>HTML5 90%</span>
                                <ProgressBar variant="danger" now={90} />
                                <span>CSS3 80%</span>
                                <ProgressBar variant="info" now={80} />
                                <span>JAVASCRIPT 70%</span>
                                <ProgressBar variant="warning" now={70} />
                                <span>PHP 60%</span>
                                <ProgressBar variant="success" now={60} />
                                <span>REACT 50%</span>
                                <ProgressBar variant="primary" now={50} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default home;