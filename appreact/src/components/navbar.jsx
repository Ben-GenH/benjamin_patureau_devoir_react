import '../css/navbar.css'
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../pages/home';
import Services from '../pages/services';
import Portfolio from '../pages/portfolio';
import Contacter from '../pages/contacter';
import Mentionslegales from '../pages/mentionslegales';


function Navigation() {
  return (
    
    <header>
        <Navbar   expand="lg"  bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand className='text-uppercase'>
            John Doe
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls='reponsive-navbar-nav'/>
          <Navbar.Collapse  className="justify-content-end" id='responsive-navbar-nav'>
            <Nav  className='text-uppercase'>
              <Nav.Link href='/' >Home</Nav.Link>
              <Nav.Link href='/services'>Services</Nav.Link>
              <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
              <Nav.Link href='/contacter'>Contacter</Nav.Link>
              <Nav.Link href='/mentionslegales'>Mentions Légales</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contacter' element={<Contacter />} />
        <Route path='/Mentionslegales' element={<Mentionslegales />} />
      
      </Routes>
    </header>
    

     );
}

export default Navigation;
