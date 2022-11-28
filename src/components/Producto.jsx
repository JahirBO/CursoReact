import React from "react";

const Producto = () => {
    let imagen ="images/pokemon 1.webp"
    let titulo ="Metagross Evolutions Figure"
    return (
        <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={imagen} alt={"Metagros"} width={500} />
        </div>
        <div className="col-md-4">
          <h1> {titulo} </h1>
          <p>$1500</p>
        </div>
      </div>
    )
}

export default Producto;