import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import '../styles/Editpage.css';

const Editpage = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate(); // For navigation after submission

    const [formdata, setformdata] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
        category: ""
    });

    useEffect(() => {

        const fetchProductData = async () => {
            try {
                const productDoc = await getDoc(doc(db, "products", id));
                if (productDoc.exists()) {
                    setformdata(productDoc.data());
                }
                else {
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProductData();
    }, [id]);

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateDoc(doc(db, "products", id), formdata);
            alert("Product updated successfully");
            navigate(`/product`);
        }
        catch (error) {
            console.log(error);
        }
    };

    const { title, price, description, image, category } = formdata;

    return (
        <div className="container">
            <h1 className="Add-product">Edit Product</h1>
            <form className="add-product" onSubmit={handleSubmit}>
                <div className="form">
                    <label className="add-label">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="add-label">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="add-label">Category:</label>
                    <input
                        type="text"
                        id="Category"
                        name="category"
                        value={category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="add-label">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="add-label">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="image"
                        value={image}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Edit Product</button>
            </form>
        </div>
    );
};

export default Editpage;
