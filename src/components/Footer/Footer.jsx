import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo_alfresi_light.png";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
    <Container>
      <Row>
        <Col lg="4" md="6" className='mb-4'>
           <div className='logo'>
           <div>
           <img src={logo} alt="Logo" aria-label="Logo de la marca" />
            </div>
            </div>
            <p className='footer__text mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
           
        </Col>
        <Col lg="3" md="3" className='mb-4'>
          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Top Categorías</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Cremas</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Aseo</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Colonias</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Productos Modernos</Link>
              </ListGroupItem>
              
            </ListGroup>
          </div>
        </Col>
        <Col lg="2" md="3" className='mb-4'>
        <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Enlaces útiles</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/shop">Tienda</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/cart">Carrito</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/">Inicio</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="3" md="3">
        <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Contacto</h4>
            <ListGroup className='footer__Contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i className="ri-map-pin-line"></i></span>
               <p>145, Direcciòn</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i className="ri-phone-line"></i></span>
               <p>(+57)321 458 9663</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i className="ri-mail-line"></i></span>
               <p>alfresi@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='12'>
            <p className='footer__copyright'>Copyright {year} developed by Tania Forero. Todos los derechos reservados. </p>
        </Col>
      </Row>
    </Container>
    </footer>
  );
};

export default Footer;
