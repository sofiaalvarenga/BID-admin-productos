import React from 'react'
import ProductForm from '../../components/ProductForm';
import axios from 'axios';
import Swal from 'sweetalert2'

//OK
const ProductAdd = () => {
  const initialValues = {
    title: '',
    price: 0,
    description: ''
  }

  const createProduct = async(values, actions) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/product/add`, values);
        console.log(response);
        if (response.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'GREAT!',
                text: `The product ${response.data.title} has been added!`,
            });
            actions.resetForm(initialValues);
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'OPS something went wrong!!',
            text: `Error: ${error?.response?.data?.message || error.message}`,
        })
    }
  }

  return (
    <>
        <h1>Add Product</h1>
        <hr />
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
                <ProductForm 
                  initialValues={initialValues}
                  textButton="Add"
                  onSubmit={createProduct}
                />
            </div>
        </div>
    </>
  )
}

export default ProductAdd;