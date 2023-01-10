import React from "react";
import {Link,NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const Encabezado = () => {
    return (
      <div className="container">
        <div className="row">
        <div className="col-md-12">
                <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}> <img src={"/images/Icon.png"} alt={"Icon of Pokemon Center"} width={350}/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/"}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/Basicos"}>Pokemon Basicos</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/Legendarios"}>Pokemon Legendarios</NavLink>
                  </li>
                  <li>
                    <CartWidget />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
         </div>
        </div>
        </div>
    )
}

export default Encabezado;