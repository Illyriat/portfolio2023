import React from "react";

import './pagesStyle/ErrorPage.css';

const ErrorPage = () => (
    <>
        <div className='error-page'>
            <h1>404 - PAGE NOT FOUND</h1>
            <h2>OOPS! Looks like something went wrong!</h2>
            <h3>This page may not exist anymore.</h3>
            <h3>Contact the site admin if you think this is a mistake.</h3>
        </div>
    </>
)

export default ErrorPage;