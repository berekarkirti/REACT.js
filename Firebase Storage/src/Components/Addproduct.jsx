import React, { useState } from 'react';
import '../styles/Addproduct.css';
import { db } from '../services/firebase'
import { collection, addDoc } from 'firebase/firestore';

const Addproduct = () => {
    const [formdata, setformdata] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
        category: ""
    });

    const { title, price, description, image, category } = formdata;

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formdata);

        try 
        {
            const res = await addDoc(collection(db, "products"), formdata)
            console.log(res)
        } 
        catch (error) 
        {
            console.log(error)
        }


    };

    return (
        <div className="container">
            <h1 className="Add-product">Add Product</h1>
            <form className="add-product" onSubmit={handleSubmit}>
                <div className="form-group">
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
                        id="category"
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

                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Addproduct;
