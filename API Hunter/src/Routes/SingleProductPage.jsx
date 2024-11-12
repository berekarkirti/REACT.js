import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleProductPage(){
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(()=>{
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
        .then ((res) => {
            setData(res.data.data);
        })
        .catch ((err) =>{
            console.log(err);
        })
    },[id]);

    console.log(data);
    const { brand, category, details, img, price } = data;

    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">{brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" src={img} alt={brand}/>
            </div>
            <div data-testid="product-category">
                {category}
            </div>
           
            <div data-testid="product-details">
                {details}
            </div>
            <div data-testid="product-price">
                ${price}
            </div>

            </div>
    )
}
export default SingleProductPage;