import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../services/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import "../styles/product.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Productpage = () => {
    const [data, setData] = useState([]);

    const getdataFromfirebase = () => {
        getDocs(collection(db, "products"))
            .then((res) => {
                let newArray = res.docs.map((el) => ({ ...el.data(), id: el.id }));
                setData(newArray);
            })
            .catch((err) => {
                console.error("Error fetching data: ", err);
            });
    };

    useEffect(() => {
        getdataFromfirebase();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "products", id));
            setData((prevData) => prevData.filter((product) => product.id !== id));
            alert("Product deleted!");
        } catch (err) {
            console.error("Error deleting document: ", err);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {data.map((product) => (
                    <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 product-grid">
                        <div className="product-card">
                            <h3>{product.id}</h3>
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.title || "No Title"}
                                    className="product-image"
                                />
                            </Link>
                            <h2 className="product-title">
                                {product.title?.substring(0, 30) || "No Title Available"}
                            </h2>
                            <h3 className="product-price">${product.price}</h3>
                            <h3 className="product-category">{product.category}</h3>
                            <p className="product-description">
                                {product.description?.substring(0, 100) || "No Description Available"}
                            </p>
                            <div className="product-buttons">
                                <button className="buy-button">Buy Now</button>
                                <button className="edit-button">
                                    <Link to={`/edit/${product.id}`} style={{ textDecoration: "none", color: "white" }}>
                                        Edit
                                    </Link>
                                </button>
                                <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productpage;
