import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/Dashboard.css';

const Dashboard = () => {
    const { id } = useParams(); 
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error(err);
                navigate('/');
            });
    }, [id, navigate]);

    if (products.length === 0) { 
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <div className="row">
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2>{product.id}</h2>
                        <div className="img">
                        <img
                                src={product.image}
                                alt={product.title}
                                className="product-image"
                            />
                        </div>
                        <h2 className="product-title">{product.title.substring(0, 30)}</h2>
                        <h3 className="product-price">${product.price}</h3>
                        <h3 className="product-category">{product.category}</h3>
                        <p className="product-description">{product.description.substring(0, 100)}</p>
                        <div className="product-buttons">
                            <button className="buy-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default Dashboard;
