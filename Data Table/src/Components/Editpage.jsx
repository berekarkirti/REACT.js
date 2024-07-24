import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../styles/Editpage.css"
import axios from 'axios'

const intialstate={
    title:"",
    description:"",
    image:"",
    price:"",
    category:""
}
const Editpage = () => {
  
    const {id}=useParams()
    const [formdata,setformdata]=useState(intialstate)
    const getsingledata=()=>{
        axios.get(`http://localhost:8000/product/${id}`)
        .then((res)=>{
            console.log(res.data)
            setformdata(res.data)
        })
        .catch((err)=>console.log(err))
    }

    const handlechange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/product/${id}`, formdata)
            .then((res) => {
                alert("Product updated successfully")
                console.log( res.data)
            })
            .catch((err) => {
                alert("Error updating product:" )
                console.log(err)
            })
    }


    const {title,price,description,image,category}=formdata
    useEffect(()=>{
        getsingledata()
    },[])

  return (
    <div className="Addproduct-container">
    <h1 className="Add-product">Edit Product</h1>
    <form className="add-product" onSubmit={(e)=>handlesubmit(e)}>
        <div className="form">
            <label className="add-label">Product Name:</label>
            <input
                type="text"
                id="name"
                name="title"
                value={title}
                onChange={(e)=>handlechange(e)}
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
                onChange={(e)=>handlechange(e)}
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
                onChange={(e)=>handlechange(e)}
                required
            />
        </div>
        <div className="form-group">
            <label className="add-label">Description:</label>
            <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e)=>handlechange(e)}
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
                onChange={(e)=>handlechange(e)}
                required
            />
        </div>

        <button type="submit">Edit Product</button>
    </form>
</div>
  )
}

export default Editpage
