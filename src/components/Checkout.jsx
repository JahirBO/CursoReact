import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import {addDoc, collection,doc,updateDoc, getFirestore} from "firebase/firestore";
 
const Checkout = () => {
    const {cart,clear, sumTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [telefono, setTelefono] = useState ("");
    const [orderId,setOrderId] = useState("");

    const generarOrden = () =>{
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, email:email,phone:telefono},
            items : cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity,
                price_total:item.quantity * item.price})),
                date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}
                    :${fecha.getSeconds()}`,
                total: sumTotal()
        };
        const db = getFirestore();
        const ordersCollection = collection(db,"orders");
        addDoc(ordersCollection, order).then ((snapShot) => {
            setOrderId(snapShot.id);
            const orderDoc = doc(db, "orders",snapShot.id);
            updateDoc(orderDoc, {total: order.total * 0.9})// actualizando el documento
            clear();

        });
    }

    return (
        <div className="container">
             <div className="row my-5">
                 <div className="col">
                 <form>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingresar Nombre"
                        onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="Email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Ingresar email"
                        onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="telefono" className="form-label">telefono</label>
                        <input type="text" className="form-control" id="telefono" placeholder="Ingresar numero de telefono"
                        onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    <button type="button" onClick={generarOrden} className="btn btn-primary">Realizar Pedido</button>
                </form>
                 </div>
                 <div className="col">
                 <table className="table">
                    <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                             <td><img src={item.imagen} alt={item.nombre} width={32} /></td>
                            <td className="align-middle">{item.nombre}</td>
                            <td className="text-center align-middle" >{item.quantity}</td>
                            <td className="text-center align-middle" >${item.quantity * item.precio}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={3} className="text-end"><b>Total a pagar</b></td>
                        <td className="text-center"><b>${sumTotal()}</b></td>
                    </tr>
                    </tbody>
                </table>
                 </div>
            </div>
                <div className="row my-5">
                    <div className="col text-center">
                        {orderId ? 
                        <div class="alert alert-warning" role="alert">
                            <h1> Felicidades</h1>
                            <p> Tu numero de orden es {orderId} </p>
                         </div> :""}
                    </div>  
                </div>
        </div>

    )
}

export default Checkout;