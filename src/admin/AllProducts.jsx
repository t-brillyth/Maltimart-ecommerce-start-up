import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';
import useGetData from '../custom-hooks/useGetData';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const AllProducts = () => {
  const { data: productsData, loading } = useGetData('products');

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    toast.success('Eliminado');
  }; 
  

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5 text-end'> 
          <Link to={`/dashboard/add-product`} className='btn btn-primary mx-2'>
          <i className="ri-add-circle-line"></i> Crear producto
          </Link> </Col>
          <Col lg="12">
            <table className='table'>
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th className='text-center'>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className='text-center'>
                      Cargando productos...
                    </td>
                  </tr>
                ) : (
                  productsData.map(item => (
                    <tr key={item.id}>
                      <td><img src={item.imgUrl} alt='imagen del Producto' /></td>
                      <td>{item.productName}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td className='text-center'>
                        <button 
                        onClick={() => 
                        {
                          deleteProduct(item.id)
                        }}
                        className='btn btn-danger'>
                          <i className="ri-delete-bin-line"></i> Eliminar
                        </button>
                        <Link to={`/dashboard/edit-product/${item.id}`} className='btn btn-primary mx-2'>
                        <i className="ri-edit-box-line"></i>  Editar
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
