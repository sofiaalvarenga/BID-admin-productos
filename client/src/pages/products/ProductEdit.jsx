import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../../components/ProductForm';
import axios from 'axios';
import Swal from 'sweetalert2'

//OK
const ProductEdit = () => {
    const navigate = useNavigate();
    const initialValues = {
        title: '',
        price: 0,
        description: ''
    }

    const { id } = useParams()
    const [product, setProduct] = useState(initialValues)

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`);
            setProduct(response.data);
        }
        getData();
    }, [id])

    const updateProduct = async(values, actions) => {

        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/product/${id}`, values);
            console.log(response);
            if (response.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'GREAT!',
                    text: `The product ${response.data.title} has been updated!`,
                });

                navigate('/product');
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'OPS!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    return (
        <>
            <h1>Edit Product</h1>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6"> {/*Cómo se verá en la pantalla*/}
                    <ProductForm 
                        initialValues={product}
                        textButton="Update"
                        onSubmit={updateProduct}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductEdit;