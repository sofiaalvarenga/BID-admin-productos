import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/products/ProductDetail";
import ProductEdit from "../pages/products/ProductEdit";
import Product from "../pages/products/Product";
import ProductAdd from "../pages/products/ProductAdd";

export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path:'product',
                element: <Product />
            },
            {
                path:'product/add',
                element: <ProductAdd />
            },
            {
                path:'product/:id',
                element: <ProductDetail />
            },
            {
                path:'product/:id/edit',
                element: <ProductEdit />
            }
        ]
    }
]);