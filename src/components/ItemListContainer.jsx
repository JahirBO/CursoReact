import React,{useState, useEffect} from "react";
import { useParams} from "react-router-dom"
import ItemList from "./ItemList";
//import arrayProductos from "./json/arrayProductos.json";
import { collection,getDocs,getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = () => {
    const [items,setItems] = useState ([]);
    const {id} = useParams();

    // useEffect(() => {
    //     const promesa = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
    //          },2000)

    //     });

    //     promesa.then((data) => {
    //         setItems(data);
        
    //     })

    // },[id ]);

    // inserto los productos del JSON a Firestore
    // useEffect (() => {
    //     const db = getFirestore ();
    //     const itemsCollection = collection(db,"items");

    //     arrayProductos.forEach((item) => {
    //         addDoc(itemsCollection,item);
    //     })

    // },[]);

    // consultar productos
    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection (db,"items");
        // const q = query(itemsCollection,where("precio","<",1300)); // filtro por precio
        const q = id ? query(itemsCollection, where("categoria","==", id)): itemsCollection;

        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) =>  ({id:doc.id, ...doc.data()})));

        });

    },[id]);


    return (
        <div className="container py-5">
                <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;