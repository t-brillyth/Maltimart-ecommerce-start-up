import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import counterImg from "../assets/images/counter-timer-img.png";

import useGetData from "../custom-hooks/useGetData";

const Home = () => {

  const {data: products, loading} = useGetData('products');

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setCremasProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'panal');
    
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'cremas');
    
    const filteredCremasProducts = products.filter(
      (item) => item.category === 'toallas');
    
    const filteredWirelessProducts = products.filter(
      (item) => item.category === 'colonias');
    
    const filteredPopularProducts = products.filter(
      (item) => item.category === 'aseo');

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setCremasProducts(filteredCremasProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">¡Explora y ahorra hoy mismo!</p>
                <h2>Cuida a tu bebé con comodidad y calidad</h2>
                <p>
                Protección para tu bebé, directo a tu puerta. <br/>¡Explora nuestra tienda en línea!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">COMPRAR AHORA</Link>{" "}
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="Imagen Hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="treding__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Productos comerciales</h2>
            </Col>
            {
              loading ? <h5 className="fw-bold">Cargando....</h5> : <ProductsList data={trendingProducts.slice(0, 4)} />
            }
          </Row>
        </Container>
      </section>

      <section className="best__sales">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Mejores Ventas</h2>
          </Col>
          {
              loading ? <h5 className="fw-bold">Cargando....</h5> : <ProductsList data={bestSalesProducts.slice(0, 4)} />
            }
        </Row>
      </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col text-center">
              <div className="clock__top-content text-center">
              <h2 className="text-white fs-5 mb-1">Canasta surtida {year}</h2>
                <h4 className="text-white fs-6 mb-3">Ofertas limitadas</h4>
                
              </div>
              <Clock />
              <motion.button whileTap={{ scale:1.2 }} className="buy__btn store__btn"><Link to="/shop">Ir a tienda</Link></motion.button>
            </Col>
            <Col lg="6" md="12" className="text-center counter__img">
              <img src={counterImg} alt="Imagen Ofertas" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
                <h2 className="section__title">Recién Llegados</h2>
            </Col>
            {
              loading ? <h5 className="fw-bold">Cargando....</h5> : <ProductsList data={mobileProducts.slice(0, 4)} />
            }
            {
              loading ? <h5 className="fw-bold">Cargando....</h5> : <ProductsList data={wirelessProducts.slice(0, 4)} />
            }
          </Row>
        </Container>
      </section>

      <section className="popular__category">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
          <h2 className="section__title mb-5"> Categoría Popular</h2>
          </Col>
          {
              loading ? <h5 className="fw-bold">Cargando....</h5> : <ProductsList data={popularProducts} />
            }
         
        </Row>
      </Container>
      </section>
    </Helmet>
  );
};

export default Home;
