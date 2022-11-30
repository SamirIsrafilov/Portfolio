import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='conatiner d-flex justify-content-center align-items-center flex-column my-5 py-5' id='page_not_found'>
        <h1 className='text-white'>404</h1>
        <h3 className='text-white fw-bold'>Oops... Page Not Found!</h3>
        <p className='text-white text-center'>Try using the button below to go to main page of the site</p>
        <Link to="/" className='btn rounded-0' id='page_not_found_btn'><span>Back to Home Page</span></Link>
    </div>
  )
}

export default PageNotFound;