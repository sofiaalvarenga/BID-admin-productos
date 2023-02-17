import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#3b3a30"}} data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Product Manager</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/product/add">Add Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/product">Products List</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu