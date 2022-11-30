import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';



const PricingPlans = () => {
    return (
        <div>
            <section className='sub_page_header '>
                <div className='sub_header d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='text-white text-center mb-3'>Pricing Plans</h1>
                    <ul className='list-unstyled d-flex'>
                        <li className='me-3 text-muted'><FaHome /></li>
                        <li><Link className='text-muted sub_header_menu' to="/">Home</Link></li>
                        <li className='mx-3 text-muted '><FaChevronRight /></li>
                        <li><Link className='text-muted sub_header_menu' to="#">Pricing Plans</Link></li>
                    </ul>
                </div>
            </section>


            <section className='my-5 py-5 pricing_cards'>
                <div className='d-flex flex-column justify-content-center align-items-center pb-5'>
                    <h2 className='text-white fw-bold mb-4'>Our Monthly Plans</h2>
                    <p className='text-white text-center'>Choose the ideal plan for what you need. We work with affordable prices for all types of pocket.</p>
                </div>

                <div className="container ">
                    <div className="row px-0 px-xl-5 mx-0 mx-xl-5">
                        <div className="col-12 col-lg-4 mb-3">
                            <div className="card mb-3 p-4" id='pricing_card' >
                                <div className="card-header text-center text-muted border-bottom border-2 ">
                                    <h5 className='fw-bold'> STANDARD</h5>
                                    <h6 className='my-3 fw-bold'>$0<span>/month</span></h6>
                                </div>
                                <div className="card-body text-muted">
                                   <ul className='list-unstyled'>
                                    <li className='fw-bold mb-3'><FaTimes/> New Movies</li>
                                    <li className='mb-3'><FaTimes/> Streamit Special</li>
                                    <li className='mb-3'><FaTimes/> American Tv Shows</li>
                                    <li className='mb-3'><FaTimes/> Hollywood Movies</li>
                                    <li className='mb-3'><FaTimes/> FHD (1080p) Video Quality</li>
                                    <li className='mb-3'><FaTimes/> Ad Free Entertainment</li>
                                   </ul>
                                   <button className='btn rounded-0 mt-2' type='submit' id='purchase_btn'><span>PURCHASE</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-3">
                            <div className="card mb-3 p-4" id='pricing_card' >
                                <div className="card-header text-center text-muted border-bottom border-2 ">
                                    <h5 className='fw-bold'>PLATINUM</h5>
                                    <h6 className='my-3 fw-bold'>$79<span>/month</span></h6>
                                </div>
                                <div className="card-body">
                                   <ul className='list-unstyled'>
                                    <li className='fw-bold mb-3'><FaTimes/> New Movies</li>
                                    <li className='mb-3'><FaTimes/> Streamit Special</li>
                                    <li className='mb-3'><FaTimes/> American Tv Shows</li>
                                    <li className='mb-3'><FaTimes/> Hollywood Movies</li>
                                    <li className='mb-3'><FaTimes/> FHD (1080p) Video Quality</li>
                                    <li className='mb-3 text-muted'><FaTimes/> Ad Free Entertainment</li>
                                   </ul>
                                   <button className='btn rounded-0 mt-2' type='submit' id='purchase_btn'><span>PURCHASE</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card mb-3 p-4" id='pricing_card' >
                                <div className="card-header text-center text-muted border-bottom border-2 ">
                                    <h5 className='fw-bold'>PREMIUM</h5>
                                    <h6 className='my-3 fw-bold'>$120<span>/month</span></h6>
                                </div>
                                <div className="card-body">
                                   <ul className='list-unstyled'>
                                    <li className='fw-bold mb-3'><FaTimes/> New Movies</li>
                                    <li className='mb-3'><FaTimes/> Streamit Special</li>
                                    <li className='mb-3'><FaTimes/> American Tv Shows</li>
                                    <li className='mb-3'><FaTimes/> Hollywood Movies</li>
                                    <li className='mb-3'><FaTimes/> FHD (1080p) Video Quality</li>
                                    <li className='mb-3'><FaTimes/> Ad Free Entertainment</li>
                                   </ul>
                                   <button className='btn rounded-0 mt-2' type='submit' id='purchase_btn'><span>PURCHASE</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PricingPlans