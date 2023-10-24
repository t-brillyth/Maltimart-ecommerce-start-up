import React, {useState} from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

import "../styles/shop.css";
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Shop = () => {

  const [productsData, setProductsData] = useState(products);

  const handleFilter = e =>{
    const filterValue = e.target.value;
    if (filterValue === "colonias") {
      const filteredProducts = products.filter(
        (item) => item.category === "colonias"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "cremas") {
      const filteredProducts = products.filter(
        (item) => item.category === "cremas"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "toallas") {
      const filteredProducts = products.filter(
        (item) => item.category === "toallas"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "aseo") {
      const filteredProducts = products.filter(
        (item) => item.category === "aseo"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "panal") {
      const filteredProducts = products.filter(
        (item) => item.category === "panal"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = e => {
    const searchTerm = e.target.value;
    
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchedProducts);
  };
  
  return (
    <Helmet title="Productos">
      <CommonSection title="Productos" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filtrar categoría</option>
                  <option value="colonias">Colonias</option>
                  <option value="cremas">Cremas</option>
                  <option value="aseo">Aseo</option>
                  <option value="toallas">Toallas </option>
                  <option value="panal">Pañales</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className='text-start'>
              <div className="filter_widget">
                  <select>
                    <option>Ordernar por</option>
                    <option value="ascending">Ascendente</option>
                    <option value="descending">Descendente</option>
                  </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search_box">
                <input type="text" placeholder="Search......" onChange={handleSearch} />
                <span> <i className="ri-search-line"></i> </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0? (
                <h3 className='text-center fs-4'>No hay productos actualmente</h3>
              ) : (
                <ProductsList data={productsData} />
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
