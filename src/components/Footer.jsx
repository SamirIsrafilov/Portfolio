import React from 'react';
import Logo from '../img/footer-logo.png';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className=" row  " id='footer_main'>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-3" id='footer_logo'>
                        <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img src={Logo} alt="" />
                        </Link>
                        <p >Here , write the complete address of the<br />
                            Registered office address along with<br />
                            telephone number.</p>

                        <ul className='list-unstyled d-flex' id='footer_socials'>
                            <li><Link to="#"><FaTwitter /></Link></li>
                            <li><Link to="#"><FaFacebookF /></Link></li>
                            <li><Link to="#"><FaInstagram /></Link></li>
                            <li><Link to="#"><FaYoutube /></Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-3">
                        <h5>DISPLAY TYPE</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">Action</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">Comedy</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">Drama</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">Horror</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-3">
                        <h5>PRODUCTION</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">2018 Year</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">2019 Year</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">2020 Year</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">2021 Year</Link></li>

                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-3">
                        <h5>DISPLAY QUALITY</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">720p HDTV</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">1080p BluRay</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">720p BluRay</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 ">1080p WEB-DL</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center' id='copyright'>
                <p className="mb-0 text-white">© Copyright 2021, All Rights Reserved</p>
                <ul className='list-unstyled d-flex justify-content-center align-items-center m-0'>
                    <li className='me-4'><Link to="#">Terms of Service</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                </ul>
                </div>
        </footer>







    )
}

export default Footer;