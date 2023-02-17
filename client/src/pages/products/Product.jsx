import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import DeleteButton from '../../components/DeleteButton';

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/product`);
      setProduct(response.data);
    }
    getData();
  }, []);
  
  const removeProduct = (productID) => {
    setProduct(product.filter((product) => product._id !== productID));
  }


  return (
    <>
      <h1>Products List</h1>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          { product.map( (product, index) => <tr key={index} >
            <td>{ product.title }</td>
            <td>{ product.price}</td>
            <td>{ product.description}</td>
            <td>
              <Link className="btn btn-primary" to={`/product/${product._id}`}>Detail</Link>   
              <Link className="btn btn-success ms-2" to={`/product/${product._id}/edit`}>Edit</Link>   
              <DeleteButton id_product={product._id} successCallback={removeProduct} />
            </td>
          </tr> )}
        </tbody>
      </table>
      <Link to="/product/add" className="btn btn-primary">Add Product</Link>
    </>
  )
}

export default Product;