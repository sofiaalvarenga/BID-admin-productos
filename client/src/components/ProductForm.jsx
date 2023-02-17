import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link} from 'react-router-dom';

const ProductError = Yup.object().shape({
    title: Yup.string()
        .min(2, 'The name cannot be that short...')
        .max(20, 'The name cannot be that long...')
        .required('Required.'),
    price: Yup.number()
        .integer('It must be an integer number.')
        .required('Required.'),
    description: Yup.string()
        .min(5, 'The description cannot be that short...')
        .max(200, 'The description cannot be that long...')
});

const ProductForm = ({initialValues, textButton, onSubmit}) => {
    return (
    <Formik 
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ProductError}
    >
        {({ errors, touched, isValid, dirty }) => (
            <Form>
                <Field name="title" className="form-control" placeholder="Title" />
                {touched.title && errors.title && <div className="ms-3 mt-1 text-danger">{errors.title}</div>}
                <Field name="price" type='number' className="form-control mt-2" placeholder="Price"/>
                {touched.price && errors.price && <div className="ms-3 mt-1 text-danger">{errors.price}</div>}
                <Field name="description" as="textarea" className="form-control mt-2" placeholder="Description" />
                {touched.description && errors.description && <div className="ms-3 mt-1 text-danger">{errors.description}</div>}
                <button type='submit' className="btn btn-primary mt-5" disabled={!(isValid && dirty)}>{textButton}</button>
                <Link className="btn btn-primary mt-5" style={{marginLeft:"10px"}} to="/product" >See all products</Link>
            </Form>
        )}
    </Formik>
)
}

export default ProductForm;