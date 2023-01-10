import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido,setVendido] = useState(false);

    useEffect(() => {
        setItemStock(stock);
    },[stock])   

    const incrementarStock = () => {
        if (counter < itemStock) {
        setCounter (counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 1){
        setCounter (counter - 1);
        }
    }

    const addToCart= (quantity) => {
        setItemStock(itemStock - quantity);
        setCounter(1);
        setVendido(true);
        onAdd(quantity);
    }

    return(
    <div>
        <div className="row mb-3 text-center">
            <div className="col-md-12">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                    <button type="button" className="btn btn-outline-primary">{counter} </button>
                    <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                {vendido ? <Link to={"/cart"} className="btn btn-outline-primary"> Terminar MI Compra</Link>  : <button type="button" className="btn btn-outline-primary" onClick={() => {addToCart(counter)}}> Agregar al carrito</button>}
            </div>
        </div>
    </div>
    )
}

export default ItemCount;