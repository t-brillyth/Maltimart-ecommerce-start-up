import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/dashboard.css";
import useGetData from '../custom-hooks/useGetData';

const Dashboard = () => {

  const {data: products } = useGetData('products');
  const {data: users } = useGetData('users');

  return (
    <>
      <section className="content_primary">
        <Container>
          <Row className="lg-12 mb-4">
            <Col className="lg-6">
              <div className="revenue__box">
              <iframe src="https://lottie.host/?file=45d21a46-83e3-4bc2-bd31-92441525ae37/4ZLQIM23bT.json"></iframe>
              </div>
            </Col>
            <Col className="lg-2">
              <div className="products__box">
                <h5>Productos totales</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col className="lg-2">
              <div className="users__box">
                <h5>Usuarios</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
          <Row className="lg-2">
            <Col className="lg-3">
              <div className="revenue__box">
                <h5>Ventas totales</h5>
                <span>$7800</span>
              </div>
            </Col>
            <Col className="lg-2">
              <div className="order__box">
                <h5>Pedidos</h5>
                <span>$7800</span>
              </div>
            </Col>
            <Col className="lg-6">
              <div className="revenue__box">
                  <iframe src="https://lottie.host/?file=0df33d1d-9c1f-4dd1-9dcd-2adb10182589/ZYQugRsBI1.json"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
