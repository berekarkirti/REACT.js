// Shows detailed information about a single product.
// useParams:- Retrieves the product ID from the URL parameters.
// axios:- Fetches product details based on the ID.
// Display:- Shows product information such as title, price, category, description, and image.
// Buttons:- Includes "Buy Now" button
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/product/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
                navigate('/products'); 
            });
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }
    

    return (
        <div className="container">
            <h1 className="title">{product.title}</h1>
            <div className="content">
                <img src={product.image} alt={product.title} className="image" />
                <div className="info">
                    <h2><b>Price:</b> ${product.price}</h2>
                    <h3><b>Category:</b> {product.category}</h3>
                    <p><b>Description:</b> {product.description}</p>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
