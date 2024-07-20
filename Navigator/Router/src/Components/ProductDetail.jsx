//Purpose: Displays detailed information about a specific product.
//-Fetches and displays details of a selected product using its ID.
//-Redirects to the products page if there's an error fetching data.

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams(); // Get product ID from URL parameters
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
                navigate('/products'); // Redirect to products page if error occurs
            });
    }, [id, navigate]);

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
