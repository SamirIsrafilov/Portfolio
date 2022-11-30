import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const ResetPassword = () => {
    return (
        <div>
            <section className='sub_page_header '>
                <div className='sub_header d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='text-white text-center mb-3'>Reset Password</h1>
                    <ul className='list-unstyled d-flex'>
                        <li className='me-3 text-muted'><FaHome /></li>
                        <li><Link className='text-muted sub_header_menu' to="/">Home</Link></li>
                        <li className='mx-3 text-muted '><FaChevronRight /></li>
                        <li><Link className='text-muted sub_header_menu' to="#">Reset Password</Link></li>
                    </ul>
                </div>
            </section>

            <section className='container reset_form py-5 my-5'>
                <div className='text-center'>
                    <h2 className='text-white fw-bold'>Forgot Password ?</h2>
                    <p className='text-white mt-3'>You Can Reset Password Using This Form.</p>
                </div>

                <form className='mt-5' onSubmit={e => { e.preventDefault(); }}>
                    <div className='row d-flex justify-content-center align-items-center flex-column'>
                        <div className="col-12 col-lg-6 mb-3">
                            <label className="form-label text-white">Email</label>
                            <input type="email" className="form-control form-control-lg bg-transparent rounded-0 text-white fs-6" placeholder='Enter your email'  style={{height:"50px"}} />
                        </div>
                        <button type="submit" className="btn rounded-0 fs-6 mb-3" id='reset_btn'><span>Reset Password</span></button>
                    </div>
                </form>

            </section>
        </div>
    )
}

export default ResetPassword