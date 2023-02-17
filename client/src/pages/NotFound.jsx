import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {

    const error  = useRouteError();

  return (
    <div className="container mt-5">
        <h1>Page not found</h1>
        <hr />
        <div className="alert alert-danger">{error.statusText || error.message}</div>
    </div>
  )
}

export default NotFound;