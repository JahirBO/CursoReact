import React,{ useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem,clear,cartTotal,sumTotal} = useContext(CartContext);

    if (cartTotal() === 0){
        return (
            <div className="container py-5">
                <div className="row"> 
                    <div className="col-md-12  text-center"> 
                        <div class="alert alert-primary" role="alert">
                        No se encuentran Productos en el carrito!
                        </div>
                        <Link to={"/"} className="btn btn-primary text-center">Volver a la Pagina Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row"> 
                <div className="col-md-12">
                    <table class="table">
                        <thead>
                                <tr>
                                    <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} className="btn btn-primary">Vaciar Carrito</Link></th>
                                </tr>
                                <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col" >Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col" className="text-end">Eliminar</th>
                                 </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.imagen} alt={item.nombre} width={32} /></td>
                                <td className="align-middle">{item.nombre}</td>
                                <td className="text-center align-middle" >{item.quantity}</td>
                                <td className="text-center align-middle" >${item.quantity * item.precio}</td>
                                <td className="text-end align-middle" > <Link onClick={() => {removeItem(item.id)}}> <img src={"images/icons8-eliminar-50.png"} alt={"eliminar Producto"} width={32} /></Link></td>
                            </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td  className="text-center aling-middle">Total</td>
                                <td className="text-center aling-middle" ><b>${sumTotal()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-primary" title="Finalizar Compra">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;