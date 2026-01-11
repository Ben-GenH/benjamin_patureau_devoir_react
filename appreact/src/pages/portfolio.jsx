import React from 'react';
import Col from 'react-bootstrap/Col';
import '../css/portfolio.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import freshFood from '../images/portfolio/fresh-food.jpg';
import restaurantAkira from '../images/portfolio/restaurant-japonais.jpg';
import espaceBienEtre from '../images/portfolio/espace-bien-etre.jpg';
import seo from '../images/portfolio/seo.jpg';
import coder from '../images/portfolio/coder.jpg';
import screens from '../images/portfolio/screens.jpg';



function portfolio () {
    return (
        <div className='main'>
            <div className='banner'>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='titre'>
                        <h1>
                            Portfolio
                        </h1>
                        <span>Voici quelqu'unes de mes réalisations</span>
                    </div>
                </div>
            </div>
                <div className='portfolio'>
                    <div className='container'>
                            <Row xs={1} md={3} >
                                <Col >
                                    <Card className="carte-portfolio">
                                        <Card.Img variant="top" src={freshFood} />
                                        <Card.Body>
                                            <Card.Title>Fresh Food</Card.Title>
                                            <Card.Text>
                                            Site de vente de produits frais en ligne
                                            </Card.Text>
                                            <Button variant="primary">Voir le site</Button>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">Site réalisé avec PHP et MySQL</Card.Footer>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="carte-portfolio">
                                        <Card.Img variant="top" src={restaurantAkira} />
                                        <Card.Body>
                                            <Card.Title>Restaurant Akira</Card.Title>
                                            <Card.Text>
                                            Site de vente de produits frais en ligne.
                                            </Card.Text>
                                            <Button variant="primary">Voir le site</Button>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">Site réalisé avec WordPress</Card.Footer>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="carte-portfolio">
                                        <Card.Img variant="top" src={espaceBienEtre} />
                                        <Card.Body>
                                            <Card.Title>Espace bien-être</Card.Title>
                                            <Card.Text>
                                            Site de vente de produits frais en ligne.
                                            </Card.Text>
                                            <Button variant="primary">Voir le site</Button>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">Site réalisé avec LARAVEL</Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                            <Row xs={1} md={3} >
                                <Col>
                                    <Card className="carte-portfolio">
                                        <Card.Img variant="top" src={seo} />
                                        <Card.Body>
                                            <Card.Title>SEO</Card.Title>
                                            <Card.Text>
                                            Amélioration du référencement d'un site e-commerce
                                            </Card.Text>
                                            <Button variant="primary">Voir le site</Button>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">Utilisation des outils SEO</Card.Footer>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="carte-portfolio">
                                        <Card.Img variant="top" src={coder} />
                                        <Card.Body>
                                            <Card.Title>Création d'une API</Card.Title>
                                            <Card.Text>
                                            Création d'une API RESTFULL publique
                                            </Card.Text>
                                            <Button variant="primary">Voir le site</Button>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">PHP - SYMFONY</Card.Footer>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="carte-portfolio">
                                        <Card.Img variant="top" src={screens} />
                                        <Card.Body>
                                            <Card.Title>Maquette d'un site web</Card.Title>
                                            <Card.Text>
                                            Création du prototype d'un site
                                            </Card.Text>
                                            <Button  variant="primary">Voir le site</Button>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">Réalisé avec FIGMA</Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                    </div>
                </div>
        </div>
        
    )
}

export default portfolio;