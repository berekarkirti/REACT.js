// Displays a paginated list of products with options to search, filter, sort, and delete.
// useState:- Manages state for products, page number, selected category, sort order, and search term.
// axios:-   Fetches product data from a local JSON server.
// Search, Filter, and Sort:- Implements features to search products, filter by category, and sort by price.
// Pagination:- Controls product display across multiple pages.
// Action Buttons- Includes buttons for viewing product details, editing, and deleting products.
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../styles/Product.css';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [selectcategory, setSelectCategory] = useState(null);
    const [order, setOrder] = useState(null);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const getDataFromServer = () => {
        axios.get(`http://localhost:8000/product`, {
            params: {
                _page: page,
                _limit: 8,
                category: selectcategory,
                _sort: "price",
                _order: order,
                q: debouncedSearch,
            },
        })
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/product/${id}`)
            .then((res) => {
                alert("Product deleted successfully!");
                getDataFromServer();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getDataFromServer();
    }, [page, selectcategory, order, debouncedSearch]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 1500);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < 6) {
            setPage(page + 1);
        }
    };

    return (
        <div className="product-container">
            <div className="product-header">
                <h1 className="product-heading">Product Page</h1>
                <div className="product-actions">
                    <FaSearch style={{ color: "teal", fontSize: "20px", fontStyle: "normal", marginRight: "8px" }} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="product-search-bar"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select className="filter-select" onChange={(e) => setSelectCategory(e.target.value)}>
                        <option value="all">All Categories</option>
                        <option value="men's clothing">Men's</option>
                        <option value="women's clothing">Women's</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                        <option value="home and kitchen">Home & Kitchen</option>
                        <option value="men's shoes">Shoes</option>
                        <option value="women's accessories">Women's Accessories</option>
                        <option value="men's accessories">Men's Accessories</option>
                    </select>
                    <button className="sort-button" onClick={() => setOrder("asc")}>Low to High</button>
                    <button className="sort-button" onClick={() => setOrder("desc")}>High to Low</button>
                </div>
            </div>
            <hr className="product-divider" />
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2>{product.id}</h2>
                        <Link to={`/productdetail/${product.id}`}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="product-image"
                            />
                        </Link>
                        <h2 className="product-title">{product.title.substring(0, 30)}</h2>
                        <h3 className="product-price">${product.price}</h3>
                        <h3 className="product-category">{product.category}</h3>
                        <p className="product-description">{product.description.substring(0, 100)}</p>
                        <div className="product-buttons">
                            <button className="buy-button">Buy Now</button>
                            <button className="edit-button">
                                <Link to={`/edit/${product.id}`} style={{ textDecoration: "none", color: "white" }}>Edit</Link>
                            </button>
                            <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
                <span>{page}</span>
                <button onClick={handleNextPage} disabled={page === 6}>Next</button>
            </div>
        </div>
    );
};

export default Product;



