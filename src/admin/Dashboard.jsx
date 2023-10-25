import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/dashboard.css";
import useGetData from '../custom-hooks/useGetData';

const Dashboard = () => {

  const {data: products } = useGetData('products');
  const {data: users } = useGetData('users');

  return (
    <>
      <section>
        <Container>
          <Row className="lg-3">
            <Col className="lg-3">
              <div className="revenue__box">
                <h5>Ventas totales</h5>
                <span>$7800</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="order__box">
                <h5>Pedidos</h5>
                <span>$7800</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="products__box">
                <h5>Productos totales</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="users__box">
                <h5>Usuarios</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
