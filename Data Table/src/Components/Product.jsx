import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Product.css';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const totalPages = 5;
    const navigate = useNavigate();

    const getDataFromServer = () => {
        axios.get(`http://localhost:3000/product?_page=${page}&_limit=8`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getDataFromServer();
    }, [page]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handleProductClick = (id) => {
        navigate(`/products/${id}`);
    };

    return (
        <div className="product-container">
            <div className="product-header">
                <h1 className="product-heading">Product Page</h1>
                <div className="product-actions">
                <FaSearch style={{color:"teal",fontSize:"20px",fontStyle:"normal",marginRight:"8px"}}/>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="product-search-bar"
                    />
                    <button className="sort-button">High to Low</button>
                    <button className="sort-button">Low to High</button>
                </div>
            </div>
            <hr className="product-divider" />
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2>{product.id}</h2>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-image"
                            onClick={() => handleProductClick(product.id)}
                        />
                        <h2 className="product-title">{product.title.substring(0, 30)}</h2>
                        <h3 className="product-price">${product.price}</h3>
                        <h3 className="product-category">{product.category}</h3>
                        <p className="product-description">{product.description.substring(0, 100)}</p>
                        <div className="product-buttons">
                            <button className="buy-button">Buy Now</button>
                            <button className="edit-button">Edit</button>
                            <button className="delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
                <span>{page}</span>
                <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
            </div>
        </div>

    );
};


export default Product;
