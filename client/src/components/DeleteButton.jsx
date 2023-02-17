import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; //Estilo de alerta

//OK
const DeleteButton = ({id_product, successCallback}) => {

    const deleteProduct = async (productID) => {

        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/product/${productID}`);
            successCallback(productID);
        }
        catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops, something is going wrong!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    const confirmDelete = (productID) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(productID)
            }
        })
    }

    return (
        <button className="btn btn-danger ms-2" onClick={() => { confirmDelete(id_product) }}>Delete</button>
    )
}

export default DeleteButton;