import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import useAuth from "../custom-hooks/useAuth";
import "../styles/admin-nav.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import logo from "../assets/images/logo_alfresi_light.png";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-Products",
    path: "/dashboard/all-products",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNav = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(admin__nav[0].path); // Inicializamos el estado con el primer path

  const handleItemClick = (path) => {
    setActiveItem(path);
  };
  
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sesión cerrada");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
              <img src={logo} alt="Logo" aria-label="Logo de la marca" />
              </div>
               <div className="search__box">
                <input type="text" placeholder="Buscar..." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className="admin__nav-top-right">
                <span>
                  <i className="ri-notification-3-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img
                  src={currentUser && currentUser.photoURL}
                  alt="Icono usuario"
                />
                <span onClick={logout} className="text-white"><i className="ri-logout-box-r-line"></i> Salir</span>
              </div>
            </div>
          </Container>
        </div>
      </header>
      <section className="admin__menu p-0">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      onClick={() => handleItemClick(item.path)} // Manejador del evento click
                      className={
                        activeItem === item.path ? "active__admin-menu" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
