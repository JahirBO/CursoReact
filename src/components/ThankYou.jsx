import React from "react";
import { useParams, Link } from "react-router-dom";

const ThankYou = () => {
    const {id} = useParams();

    return(
        <div className="container py-5">
        <div className="row"> 
            <div className="col-md-12  text-center"> 
                <div class="alert alert-primary" role="alert">
                <h1> Gracias por tu compra</h1>
                <p> Tu numero de Orden es : <b>{id}</b></p>
                </div>
                <Link to={"/"} className="btn btn-primary text-center">Volver a la Pagina Principal</Link>
            </div>
        </div>
    </div>
    )
}

export default ThankYou;