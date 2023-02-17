import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

//OK
const ProductDetail = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`);
            setProduct(response.data);
        }
        getData();
    }, [id])

    return (
        <div className="card">
            <div className="card-header">
                Products details:
            </div>
            <div className="card-body">
                <h5 className="card-title">Title: {product.title}</h5>
                <h5 className="card-title">Price: {product.price}</h5>
                <p className="card-text">Description: {product.description}</p>
                <Link className="btn btn-primary" to="/product" >BACK</Link>
            </div>
        </div>
    )
}

export default ProductDetail;