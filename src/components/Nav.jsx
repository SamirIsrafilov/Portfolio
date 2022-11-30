import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../img/header-logo.png';
import { FaAngleDown } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { MdShop2 } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import '../langConfig/i18n';
const Nav = () => {
    const {t,i18n} = useTranslation()
    const handlerClick =(lang)=>{
        i18n.changeLanguage(lang);
    }
    return (
        <div style={{ backgroundColor: "#272829" }}>

            <NavLink className="navbar-brand d-none" id='logo_mobile' to="/"><img src={Logo} alt="Logo" /></NavLink>
            <div className='position-relative container'>
                <nav className="navbar navbar-expand-lg navbar-dark  py-3">
                    <div className="container p-0">
                        <button className="navbar-toggler ms-3" id='toggler_btn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <Link className="navbar-brand me-5 " id='logo' to="/"><img src={Logo} alt="Logo" /></Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link px-3 page_title text-uppercase" aria-current="page" to="/">{t("nav.1")}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link px-3 page_title text-uppercase" to="/movies">{t("nav.2")}</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link px-3 page_title text-uppercase" to="/shows">{t("nav.3")}</NavLink>
                                </li>

                                <li className="nav-item dropdown submenu" >
                                    <NavLink className="nav-link px-3 page_title text-uppercase" to="pages/" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    {t("nav.4")}{<FaAngleDown />}
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item sub_page_title text-uppercase" to="/about">{t("nav.5")}</Link></li>
                                        <li><Link className="dropdown-item sub_page_title text-uppercase" to="/contact">{t("nav.6")}</Link></li>
                                        <li><Link className="dropdown-item sub_page_title text-uppercase" to="/notfoundpage">404</Link></li>
                                        <li><Link className="dropdown-item sub_page_title text-uppercase" to="/login">{t("nav.7")}</Link></li>
                                        <li className='border-0 nav-item dropdown text-uppercase'><Link className="dropdown-item sub_page_title" to="signup/">{t("nav.8")}</Link></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>

                    </div>

                </nav>
                <div className="d-flex" id='nav_icons' >
                    <ul className='d-flex align-items-center list-unstyled p-0 m-0'>
                        <li className='mx-3'><Link className='nav_icon fs-6' data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" to="#"><FaSearch /></Link>
                            <div >
                                <div className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                                    <div className="offcanvas-header d-flex justify-content-end">
                                        <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                                    </div>
                                    <div className="offcanvas-body" id='search_offcanvas_body'>
                                        <div className="input-group rounded-end rounded-5" id='search_body_input'>
                                            <input type="text" className="form-control  bg-transparent border-0 text-white " placeholder="Search" />
                                            <button className="btn input-group-text bg-transparent border-0" id="addon-wrapping"><FaSearch className='text-white' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <li className='mx-3'><Link className='nav_icon fs-6' to="#"><IoMdNotifications /></Link></li> */}
                        <li className='mx-3'><Link className='nav_icon fs-6' to="/favorite"><MdShop2 /></Link></li>

                        <li className='mx-3'>
                            <div>
                                <Link className='nav_icon fs-4' to="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><BsFillGearFill id='gear' /></Link>

                                <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: "100%" }}>
                                    <div className="offcanvas-header ">
                                        <button type="button" className="btn-close btn-danger" data-bs-dismiss="offcanvas" id="close_btn" />
                                    </div>
                                    <div className="offcanvas-body">




                                        <div className="dropdown canvas_dropdown" >
                                            <button className="btn dropdown d-flex justify-content-between align-items-center rounded-0 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Display Type <IoIosArrowDropdownCircle className='fs-4' />
                                            </button>
                                            <div className="dropdown-menu dropdown_body" >
                                                <div className='row d-flex'>
                                                    <div className="col-6  text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">All</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Action</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Crime</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Comedy</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Adventures</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Horror</a>
                                                    </div>
                                                    <div className="col-6 text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">Drama</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Romantic</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Excitement</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Ambiguity</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Fantasia</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Fiction</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="dropdown canvas_dropdown" >
                                            <button className="btn dropdown d-flex justify-content-between align-items-center rounded-0 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Year of Production <IoIosArrowDropdownCircle className='fs-4' />
                                            </button>
                                            <div className="dropdown-menu dropdown_body">
                                                <div className='row d-flex'>
                                                    <div className="col-4  text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">All</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2002</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2005</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2008</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2011</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2014</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2017</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2020</a>

                                                    </div>
                                                    <div className="col-4 text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">2000</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2003</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2007</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2009</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2012</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2015</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2018</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2021</a>


                                                    </div>
                                                    <div className="col-4 text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">2001</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2004</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2007</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2010</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2013</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2016</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2019</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">2022</a>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="dropdown canvas_dropdown" >
                                            <button className="btn dropdown d-flex justify-content-between align-items-center rounded-0 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Display Quality <IoIosArrowDropdownCircle className='fs-4' />
                                            </button>
                                            <div className="dropdown-menu dropdown_body" >
                                                <div className='row d-flex'>
                                                    <div className="col-6  text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">All</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">1080p BluRay</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">1080p WEB-DL</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">720p HD</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">HDTV</a>
                                                    </div>
                                                    <div className="col-6 text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">720p HDTV</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">720p BluRay</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">720p WEBRip</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">1080p HD</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">720p WEB-Dl</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="dropdown canvas_dropdown" >
                                            <button className="btn dropdown d-flex justify-content-between align-items-center rounded-0 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Country of Production <IoIosArrowDropdownCircle className='fs-4' />
                                            </button>
                                            <div className="dropdown-menu dropdown_body" >
                                                <div className='row d-flex'>
                                                    <div className="col-6  text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">All</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Canada</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Argentina</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">United States</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Japon</a>
                                                    </div>
                                                    <div className="col-6 text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">France</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">China</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Australia</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Germany</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Italy</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="dropdown canvas_dropdown" >
                                            <button className="btn dropdown d-flex justify-content-between align-items-center rounded-0 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                The Language <IoIosArrowDropdownCircle className='fs-4' />
                                            </button>
                                            <div className="dropdown-menu dropdown_body" >
                                                <div className='row d-flex'>
                                                    <div className="col-6  text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">All</a>
                                                        <a className="btn dropdown-item rounded-0" onClick={()=>{handlerClick('en')}} href="#">English</a>
                                                        <a className="btn dropdown-item rounded-0" onClick={()=>{handlerClick('tr')}} href="#">Turkish</a>
                                                        <a className="btn dropdown-item rounded-0" onClick={()=>{handlerClick('az')}} href="#">Azerbaijan</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Japanese</a>
                                                    </div>
                                                    <div className="col-6 text-center movie_type">
                                                        <a className="btn dropdown-item rounded-0" href="#">Arabic</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">German</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">French</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Russian</a>
                                                        <a className="btn dropdown-item rounded-0" href="#">Chinese</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="btn-group dropstart ms-3 me-4 submenu" id="user">
                            <button type="button" className="btn border-0 nav_icon fs-6" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaUserAlt />
                            </button>
                            <ul className="dropdown-menu mt-5" style={{ width: "230px" }}>
                                <li><Link to="/account" className='dropdown-item sub_page_title text-uppercase'>{t("nav.9")}</Link></li>
                                <li><Link to="/pricing" className='dropdown-item sub_page_title text-uppercase'>{t("nav.10")}</Link></li>
                                <li><Link to="#" className='dropdown-item sub_page_title text-uppercase'>{t("nav.11")}</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav